import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const url = firebaseConfig.firebaseKeys.databaseURL;

const getEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${url}/employees.json`)
    .then((resp) => {
      const employees = [];
      Object.keys(resp.data).forEach((key) => {
        resp.data[key].id = key;
        employees.push(resp.data[key]);
      })
      resolve(employees);
    })
    .catch(err => console.error(err))
});

export default { getEmployees };