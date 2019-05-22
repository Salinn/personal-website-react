import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL_BASE;
axios.defaults.headers = {
    'Content-Type': 'application/json',
};

const get = (url) => {
    return axios.get(url);
};

const post = (url, params) => {
    return axios.post(url, params);
};

const put = (url, params) => {
    return axios.put(url, params);
};

const deleteIt = (url) => {
    return axios.delete(url);
};

const custom = props => {
    return axios({ ...props });
};

export { get, post, put, custom, deleteIt };