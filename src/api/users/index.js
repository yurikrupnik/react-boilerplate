import express from 'express';
import { url } from './config';
import Model from './model';
import {
    list,
    // find,
    // removeOne,
    // create,
    // response,
    // responseError
} from '../methods';

const route = express.Router();

route.get(url, list(Model)); // array
// route.get(`${url}/:id`, find(Model)); // object
// route.post(url, create(Model));
//
// route.put(url, (req, res) => Model
//     .findOneAndUpdate({ _id: req.body._id }, { // eslint-disable-line no-underscore-dangle
//         name: 'else',
//         email: '',
//         hashPassword: 'ta s'
//     }) // eslint-disable-line no-underscore-dangle
//     .then(response(res))
//     .catch(responseError(res)));
//
// route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
