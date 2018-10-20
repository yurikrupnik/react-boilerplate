import Routes from './classes';
import News from './Newsletter';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Education from './Education';

const routes = new Routes([
    {
        path: '/',
        component: Header
    },
    {
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee'
    },
    {
        component: Education,
        path: '/education',
        label: 'education'
    },
    {
        path: '/',
        component: News
    }
]);


export default routes;
