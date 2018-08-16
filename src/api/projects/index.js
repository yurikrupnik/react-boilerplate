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

const router = express.Router();

router.get(url, list(Model)); // arr.ay
// router.get(`${url}/:id`, find(Model)); // object
// router.post(url, create(Model));
//
// router.put(url, ctx => Model
//     .findOneAndUpdate({ _id: ctx.request.body._id }, { // eslint-disable-line no-underscore-dangle
//         name: 'else',
//         email: '',
//         hashPassword: 'tas'
//     })
//     .then(response(ctx))
//     .catch(responseError(ctx)));
//
// router.delete(`${url}/:id`, removeOne(Model)); // id

export default router;
