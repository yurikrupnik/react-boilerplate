import Route from './classes';
import News from './Newsletter';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Education from './Education';
// console.log('Header', Header);

class Routes {
    constructor(list) {
        // super(props);
        this.list = list;
    }

    getLinks() {
        return this.list.reduce((acc, next) => {
            if (!next.label) {
                return acc;
            }
            return acc.concat({
                label: next.label,
                key: next.key,
                to: next.path,
            });
        }, []);
    }

    handleComponents(isMobile) {
        return this.list.map(item => {
            const { component, sidebar, main, key, path, exact } = item;
            let con, side, ma;
            if (Array.isArray(component)) {
                con = isMobile ? component[0] : component[1];
            } else {
                con = component;
            }

            if (Array.isArray(sidebar)) {
                side = isMobile ? component[0] : component[1];
            } else {
                side = sidebar;
            }

            if (Array.isArray(main)) {
                ma = isMobile ? component[0] : component[1];
            } else {
                ma = main;
            }
            return {
                component: con,
                sidebar: side,
                main: ma,
                exact,
                path,
                key
            };
        });
    }
}

const routes = new Routes([
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
    })
]);

// function getLinks() {
//     console.log('getLinks');
//
//     return routes.reduce((acc, next) => {
//         if (!next.label) {
//             return acc;
//         }
//         return acc.concat({
//             label: next.label,
//             to: next.path,
//             key: next.key
//         });
//     }, []);
// }
//
// function getRoutes() {
//     return routes;
// }

export default routes;

// export { getLinks, getRoutes };
