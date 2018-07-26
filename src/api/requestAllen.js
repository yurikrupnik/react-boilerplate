import request from 'axios';

// for testing module.hot:
// https://stackoverflow.com/questions/45037032/test-module-hot-with-jest
export default request.create({
    baseURL: 'https://www.jamesallen.com/JAReactHandler.ashx'
});
