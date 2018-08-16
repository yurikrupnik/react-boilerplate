import express from 'express';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
import users from './users';
import projects from './projects';

const route = express.Router();

// route.use(morgan('dev'));
// route.use(bodyParser());
route.use('/api', [users, projects]);

export default route;
