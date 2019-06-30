import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const url = firebaseConfig.firebaseKeys.databaseURL;

const deleteDog = (id) => axios.delete(`${url}/dogs/${id}.json`);

export default { deleteDog };

