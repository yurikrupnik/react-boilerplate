import uniqid from 'uniqid';
import News from './routes/Newsletter';
import Dashboard from './routes/Dashboard';
import Header from './routes/Header';
import Guarantee from './routes/Guarantee';
import Topics from '../../components/Topics';
import Education from './routes/Education';

const routes = [
    {
        path: '/',
        component: Header,
        key: uniqid(),
        fetch: () => {
            return Promise.resolve([
                {
                    user: 'shit',
                    lol: true
                }
            ]);
        }
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
                component: Array.isArray(next.component) ? isMobile ? next.component[0] : next.component[1] : next.component // eslint-disable-line
            }));
        }
        if (next.main) {
            return acc.concat(Object.assign({}, next, {
                main: Array.isArray(next.main) ? isMobile ? next.main[0] : next.main[1] : next.main // eslint-disable-line
            }));
        }
        if (next.sidebar) {
            return acc.concat(Object.assign({}, next, {
                sidebar: Array.isArray(next.sidebar) ? isMobile ? next.sidebar[0] : next.sidebar[1] : next.sidebar // eslint-disable-line
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

export default { routes, getRoutesByType, getLinks };
