// import Routes from './classes';
import uniqid from 'uniqid';
import News from './Newsletter';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Topics from '../components/Topics';
import Education from './Education';

const routes = [
    {
        path: '/',
        component: Header,
        key: uniqid()
    },
    {
        path: '/',
        component: Dashboard,
        exact: true,
        key: uniqid()
    },
    {
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee',
        key: uniqid()
    },
    {
        component: Education,
        path: '/education',
        label: 'education',
        key: uniqid()
    },
    {
        component: Topics,
        path: '/topics',
        label: 'topics',
        key: uniqid()
    },
    {
        path: '/',
        component: News,
        key: uniqid()
    }
];

function getRoutesByType(isMobile) {
    return routes.reduce((acc, next) => {
        if (next.component) {
            return acc.concat(Object.assign({}, next, {
                component: Array.isArray(next.component) ? isMobile ? next.component[0] : next.component[1] : next.component
            }));
        }
        if (next.main) {
            return acc.concat(Object.assign({}, next, {
                main: Array.isArray(next.main) ? isMobile ? next.main[0] : next.main[1] : next.main
            }));
        }
        if (next.sidebar) {
            return acc.concat(Object.assign({}, next, {
                sidebar: Array.isArray(next.sidebar) ? isMobile ? next.sidebar[0] : next.sidebar[1] : next.sidebar
            }));
        }
        return acc.concat(next);
    }, []);
}

function getLinks() {
    return routes.reduce((acc, route) => {
        if (!route.label) {
            return acc;
        }
        return acc.concat({
            label: route.label,
            key: route.key,
            to: route.path
        });
    }, []);
    // console.log('links', links);

    // return [
    //     {
    //         to: '/asd',
    //         key: 'asd',
    //         label: 'omg'
    //     }
    // ];
}

export default { getRoutesByType, getLinks };
