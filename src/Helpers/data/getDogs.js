import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const url = firebaseConfig.firebaseKeys.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${url}/dogs.json`)
    .then((resp) => {
      const dogs = [];
      Object.keys(resp.data).forEach((key) => {
        resp.data[key].id = key;
        dogs.push(resp.data[key]);
      })
      resolve(dogs);
    })
    .catch(err => console.error(err))
});

export default { getDogs };
