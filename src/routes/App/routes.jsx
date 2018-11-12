import uniqid from 'uniqid';
import Dashboard from './Dashboard';
import Guarantee from './Guarantee';
import Topics from './Topics';
import Education from './Education';
import Header from './Header';
import Newsletter from './Newsletter';
import api from '../../api/currency/api';
import users from '../../api/users/api';

const keyByElement = (ele) => {
    if (Array.isArray(ele)) {
        return ele[0].name;
    }
    return ele.name;
};

const routes = [
    {
        key: 'header',
        path: '/',
        component: Header
    },
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
        key: keyByElement(Guarantee),
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee',
    },
    {
        key: keyByElement(Education),
        component: Education,
        path: '/education',
        label: 'education',
    },
    {
        key: keyByElement(Topics),
        component: Topics,
        path: '/topics',
        label: 'topics',
    },
    {
        key: 'newsletter',
        path: '/',
        component: Newsletter
    }
];

export default routes;
