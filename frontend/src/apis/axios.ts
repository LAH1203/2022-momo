import Axios from 'axios';

export const baseURL = 'http://54.180.160.62:8080/api';

const axios = Axios.create({
  baseURL,
});

export default axios;
