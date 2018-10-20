import uniqid from 'uniqid';
import { Route as reactRoute } from 'react-router-dom';

class Route {
    constructor({
        path = '/',
        main = [],
        sidebar = [],
        component,
        label = '',
        exact = false
    }) {
        this.path = path;
        this.component = component;
        this.main = main;
        this.sidebar = sidebar;
        this.label = label;
        this.exact = exact;
        this.key = uniqid();
    }
}


class Routes {
    constructor(list) {
        if (Array.isArray(list)) {
            this.list = list.map(item => new Route(item));
        } else {
            this.list = [];
        }
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


export default Routes;
// export { getRoutesByDevice };
