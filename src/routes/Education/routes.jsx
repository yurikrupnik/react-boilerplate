import uniqid from 'uniqid';
import Diamonds from './Diamonds';
import Engagement from './Engagement';
import Sidebar from './Sidebar';
import Main from './Main';
// import Routes from '../classes';

const routes = [
    {
        path: '/education',
        component: Main,
        exact: true,
        key: uniqid()
    },
    {
        path: '/education/diamonds',
        main: Diamonds,
        sidebar: Sidebar,
        label: 'loose diamonds',
        key: uniqid()
    },
    {
        path: '/education/engagement-rings',
        main: Engagement,
        sidebar: Sidebar,
        label: 'engagement rings',
        key: uniqid()
    }
];

export default routes;
