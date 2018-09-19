import request from 'axios';
// import {host} from '../config';

// for testing module.hot:
// https://stackoverflow.com/questions/45037032/test-module-hot-with-jest
export default request.create({
    baseURL: module.hot ? 'http://localhost:5001' : 'http://localhost:5000'
});
