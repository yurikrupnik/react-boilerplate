import reduce from 'lodash/reduce';
import uniqid from 'uniqid';

class Helper {
    static componentTypes(key) {
        return ['component', 'sidebar', 'main'].includes(key);
    }

    static handleRoute(isMobile) {
        return (acc, val, key) => {
            if (Helper.componentTypes(key)) {
                if (Array.isArray(val)) {
                    acc[key] = isMobile // eslint-disable-line no-param-reassign
                        ? val[0] : val[1];
                } else {
                    acc[key] = val; // eslint-disable-line no-param-reassign
                }
            }
            return acc;
        };
    }

    getRoutesByType(isMobile) {
        return this.routes.reduce((acc, next) => {
            const keys = reduce(next, Helper.handleRoute(isMobile), {});
            return acc.concat(Object.assign({}, next, keys));
        }, []);
    }

    getLinks() {
        return this.routes.reduce((acc, next) => {
            if (!next.label) {
                return acc;
            }
            return acc.concat({
                label: next.label,
                key: next.key,
                to: next.path
            });
        }, []);
    }
}

class Routes extends Helper {
    constructor(routes) {
        super();
        this.routes = routes.map((route) => {
            route.key = uniqid(); // eslint-disable-line no-param-reassign
            return route;
        });
    }
}

class Router extends Routes {
    static create(routes) {
        return new Routes(routes);
    }
}

export default Router;
export { Helper };
