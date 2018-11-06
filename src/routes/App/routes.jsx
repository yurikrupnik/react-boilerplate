import React from 'react';
import Router from '../services/Router';
import Dashboard from './Dashboard';
import Header from './Header';
import Newsletter from './Newsletter';
import Guarantee from './Guarantee';
import Topics from './Topics';
import Education from './Education';
import api from '../../api/currency/api';
import users from '../../api/users/api';

const routes = [
    {
        path: '/',
        component: Header, // todo pass paramaters to fetch
        // render: (props) => {
        //     return <Header {...props} />
        // },
        fetchInitialData: (url) => {
            console.log('url', url);

            return Promise.all([
                api.fetch(), users.fetch()
            ]);
        },
        providers: [api.provider, users.provider]
    },
    {
        path: '/',
        component: Dashboard,
        exact: true,
        fetchInitialData: () => {
            return Promise.resolve([
                {
                    user: 'shit',
                    lol: true
                }
            ]);
        }
    },
    {
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee',
    },
    {
        component: Education,
        path: '/education',
        label: 'education',
    },
    {
        component: Topics,
        path: '/topics',
        label: 'topics',
    },
    {
        path: '/',
        component: Newsletter,
    }
];

export default routes;
