import axios from 'axios';
import { BASE_URL } from '../config/index.js';

const APICaller = ({ method, url, data }) => {
  const option = {
    method,
    url: BASE_URL + url,
    data,
    headers: {
      'content-type': 'application/json',
      Accept: '*/*',
      Authorization: localStorage.getItem('token') || null,
    },
  };

  return new Promise((resolve, reject) => {
    axios({ ...option })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default APICaller;