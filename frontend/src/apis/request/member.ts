import axios from 'apis/axios';
import { API_PATH } from 'constants/path';

interface Member {
  email: string;
  password: string;
  nickname: string;
}

const requestSignup = (memberInfo: Member): Promise<void> => {
  return axios.post(API_PATH.MEMBER, memberInfo);
};

export { requestSignup };
