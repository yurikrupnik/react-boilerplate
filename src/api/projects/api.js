import request from 'axios';
import { url } from './config';


const api = {
    fetch: (params, cb) => request.get(`/api${url}`, { params })
        .then((res) => {
            const { data } = res;
            if (typeof cb === 'function') {
                return cb(data);
            }
            return data;
        })
};

export default api;
