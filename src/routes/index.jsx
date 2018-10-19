import Route from './classes';
import News from './Newsletter';
// import Dashboard from '../components/Dashboard';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Education from './Education';


export default [
    new Route({
        component: Header
    }),
    new Route({
        component: Dashboard,
        exact: true
    }),
    new Route({
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee'
    }),
    new Route({
        component: Education,
        path: '/education',
        label: 'education'
    }),
    new Route({
        component: News
    }),
];
