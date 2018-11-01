import request from '../request';
import { url, Provider } from './config';

const api = {
    provider: Provider,
    fetch: params => request.get(`/api${url}`, { params })
        .then(res => res.data)
        .catch(error => error)
};

export default api;
