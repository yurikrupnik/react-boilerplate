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
}

export default { getRoutesByType, getLinks };
