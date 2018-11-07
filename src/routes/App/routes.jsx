import uniqid from 'uniqid';
import Dashboard from './Dashboard';
import Guarantee from './Guarantee';
import Topics from './Topics';
import Education from './Education';
import api from '../../api/currency/api';
import users from '../../api/users/api';

const routes = [
    {
        key: uniqid(),
        path: '/',
        component: Dashboard,
        exact: true,
        fetchInitialData: (url) => {
            console.log('url', url);
            return Promise.all([
                api.fetch(), users.fetch()
            ]);
        },
        providers: [api.provider, users.provider]
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
];

export default routes;
