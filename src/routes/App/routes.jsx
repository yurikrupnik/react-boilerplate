// import React from 'react';
import uniqid from 'uniqid';
// import Router from '../services/Router';
import Dashboard from './Dashboard';
import Header from './Header';
import Newsletter from './Newsletter';
import Guarantee from './Guarantee';
import Topics from './Topics';
import Education from './Education';
// import api from '../../api/currency/api';
// import users from '../../api/users/api';

const routes = [
    // {
    //     key: uniqid(),
    //     path: '/',
    //     component: Header, // todo pass paramaters to fetch
    //     // render: (props) => {
    //     //     return <Header {...props} />
    //     // },
    //     // fetchInitialData: (url) => {
    //     //     console.log('url', url);
    //     //
    //     //     return Promise.all([
    //     //         api.fetch(), users.fetch()
    //     //     ]);
    //     // },
    //     // providers: [api.provider, users.provider]
    // },
    {
        key: uniqid(),
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        key: uniqid(),
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee',
    },
    {
        key: uniqid(),
        component: Education,
        path: '/education',
        label: 'education',
    },
    {
        key: uniqid(),
        component: Topics,
        path: '/topics',
        label: 'topics',
    }
    // {
    //     key: uniqid(),
    //     path: '/',
    //     component: Newsletter,
    // }
];

export default routes;
