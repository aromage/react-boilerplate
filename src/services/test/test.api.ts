import axios from 'axios';
import { axiosGeneralAPI } from '..';

export async function getTest() {
  const { data } = await axiosGeneralAPI().get('/test');

  return data;
}

export async function createTest(requestBody) {
  const { data } = await axiosGeneralAPI().post('/test', requestBody);

  return data;
}
