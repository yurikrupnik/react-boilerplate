import Route from './classes';
import News from './Newsletter';
// import Dashboard from '../components/Dashboard';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Education from './Education';

const routes = [
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

function getLinks() {
    return routes.reduce((acc, next) => {
        if (!next.label) {
            return acc;
        }
        return acc.concat({
            label: next.label,
            to: next.path,
            key: next.key
        });
    }, []);
}

function getRoutes() {
    return routes;
}

export default routes;

export { getLinks, getRoutes };
