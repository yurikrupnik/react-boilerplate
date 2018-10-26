import request from '../jamesRequest';
import { url } from './config';

const api = {
    fetch: params => request.get(`${url}`, { params })
        .then(res => res.data)
        .catch(error => error)
};

export default api;
