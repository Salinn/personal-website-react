import axios from 'axios';
import { getConfig, types } from '../config';

const baseUrl = getConfig(types.apiUrl);
const env = getConfig(types.env);

const get = props => {
  const { url } = props;
  return axios.get(`${baseUrl}/${env}/${url}`);
};

const post = props => {
  const { url, data } = props;
  return axios.post(`${baseUrl}/${env}/${url}`, data);
};

export { get, post };
