import uniqid from 'uniqid';
import Diamonds from './Diamonds';
import Engagement from './Engagement';
import Sidebar from './Sidebar';
import Main from './Main';
import Routes from '../classes';

const routes = new Routes([
    { // find a way to pass routes here
        path: '/education',
        component: Main,
        exact: true,
        // key: uniqid()
    },
    {
        path: '/education/diamonds',
        main: Diamonds,
        sidebar: Sidebar,
        exact: true,
        // key: uniqid(),
        label: 'loose diamonds'
    },
    {
        path: '/education/engagement-rings',
        main: Engagement,
        sidebar: Sidebar,
        exact: true,
        // key: uniqid(),
        label: 'engagement rings'
    },
]);

//
const normalRoutes = [
    { // find a way to pass routes here
        path: '/education',
        component: Main[0],
        exact: true,
        key: uniqid()
    },
    {
        path: '/education/diamonds',
        main: Diamonds,
        sidebar: Sidebar,
        key: uniqid(),
        label: 'loose diamonds'
    },
    {
        path: '/education/engagement-rings',
        main: Engagement,
        sidebar: Sidebar,
        key: uniqid(),
        label: 'engagement rings'
    },
];

export default routes;
export { normalRoutes };
