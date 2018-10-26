import { Component } from 'react';
import request from '../request';
import { url } from './config';

const api = {
    fetch: params => request.get(`/api${url}`, { params })
        .then(res => res.data)
        .catch(error => error)
};

// class Api extends Component {
//     constructor() {
//         super();
//         this.url = url;
//     }
//
//     fetch(params) {
//         return request.get(`${this.url}`, { params })
//             .then(res => res.data)
//             .catch(error => error);
//     }
// }

export default api;
