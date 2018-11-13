// import uniqid from 'uniqid';
import React from 'react';
import Dashboard from './Dashboard';
// import Guarantee from './Guarantee';
import Topics from './Topics';
import NoMatch from './NoMatch';
// import Education from './Education';
// import api from '../../api/currency/api';
// import users from '../../api/users/api';

const keyByElement = (ele) => {
    if (Array.isArray(ele)) {
        return ele[0].name;
    }
    return ele.name;
};

const routes = [
    {
        key: keyByElement(Dashboard),
        path: '/',
        component: Dashboard,
        exact: true,
        // fetchInitialData: (url) => {
        //     console.log('url', url); // eslint-disable-line no-console
        //     return Promise.all([
        //         api.fetch(), users.fetch()
        //     ]);
        // },
        // providers: [api.provider, users.provider]
    },
    {
        key: '2d',
        path: '/yeabl1',
        component: () => {
            return (
                <div>
                    yebal 1
                </div>
            );
        }
    },
    {
        key: 't',
        path: '/yeabl2',
        component: () => {
            return (
                <div>
                    yebal 2
                </div>
            );
        }
    },
    // {
    //     key: keyByElement(Guarantee),
    //     component: Guarantee,
    //     path: '/guarantee',
    //     label: 'guarantee',
    // },
    // {
    //     key: keyByElement(Education),
    //     component: Education,
    //     path: '/education',
    //     label: 'education',
    // },
    {
        key: keyByElement(Topics),
        component: Topics,
        path: '/topics',
        label: 'topics',
    },
    {
        key: 'no-match',
        path: '/*',
        component: NoMatch
    }
];

export default routes;
