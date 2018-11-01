import Diamonds from './Diamonds/index';
import Engagement from './Engagement/index';
import Sidebar from './Sidebar/index';
import Main from './Main/index';
import Router from '../../services/Router';

const routes = [
    {
        path: '/education',
        component: Main,
        exact: true
    },
    {
        path: '/education/diamonds',
        main: Diamonds,
        sidebar: Sidebar,
        label: 'loose diamonds'
    },
    {
        path: '/education/engagement-rings',
        main: Engagement,
        sidebar: Sidebar,
        label: 'engagement rings'
    }
];

export default Router.create(routes);
