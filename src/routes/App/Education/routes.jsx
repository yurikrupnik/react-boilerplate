import uniqid from 'uniqid';
import Diamonds from './Diamonds';
import Engagement from './Engagement';
import Sidebar from './Sidebar';
import Main from './Main';

const routes = [
    {
        key: uniqid(),
        path: '/education',
        main: Main,
        exact: true
    },
    {
        key: uniqid(),
        path: '/education/diamonds',
        component: Diamonds,
        sidebar: Sidebar,
        label: 'loose diamonds'
    },
    {
        key: uniqid(),
        path: '/education/engagement-rings',
        component: Engagement,
        sidebar: Sidebar,
        label: 'engagement rings'
    }
];

export default routes;
