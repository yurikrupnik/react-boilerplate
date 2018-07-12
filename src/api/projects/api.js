import request from 'axios';
import { url } from './config';

const api = {
    fetch: params => request.get(`/api${url}`, { params })
        .then(res => res.data)
};

export default api;
