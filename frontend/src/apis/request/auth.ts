import axios from 'apis/axios';
import { API_PATH } from 'constants/path';

interface Account {
  email: string;
  password: string;
}

const requestLogin = (accountData: Account): Promise<void> => {
  return axios.post(API_PATH.AUTH, accountData);
};

export { requestLogin };
