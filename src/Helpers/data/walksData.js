import axios from 'axios';

import firebaseConfig from '../apiKeys.json'
import employeesData from './getEmployees';
import dogsData from './getDogs';

const url = firebaseConfig.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${url}/walks.json`)
    .then((resp) => {
      const walksArray = resp.data;
      const walks = [];
      Object.keys(walksArray).forEach((key) => {
        walksArray[key].id = key;
        walks.push(walksArray[key]);
      })
      dogsData.getDogs()
        .then((dogs) => {
          const walksWithDogs = walks.map((walk) => {
            const selectedDog = dogs.filter(dog => dog.id === walk.dogId )
            walk.dogName = selectedDog[0].name;
            return walk;
          })
          employeesData.getEmployees()
            .then((employees) => {
              const walksWithEmpAndDogs = walksWithDogs.map((walkWithDog) => {
                const selectedEmployee = employees.filter(employee => employee.id === walkWithDog.employeeId)
                walkWithDog.employeeName = selectedEmployee[0].name;
                return walkWithDog
              })
              resolve(walksWithEmpAndDogs);
            })
            .catch()
        })
        .catch()
    })
    .catch(err => reject(err))
});

const deleteWalk = (walkID) => axios.delete(`${url}/walks/${walkID}.json`)

const addWalk = (newWalk) => axios.post(`${url}/walks.json`, newWalk)

const updateWalk = (walkId, newWalk) => axios.put(`${url}/walks/${walkId}.json`, newWalk);

export default { getWalks, deleteWalk, addWalk, updateWalk };
