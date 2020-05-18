import axios from 'axios';

const get = props => {
  const { url } = props;
  return axios.get(url);
};

const post = props => {
  const { url } = props;
  return axios.post(url);
};

export { get, post };
