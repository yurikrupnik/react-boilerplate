import uniqid from 'uniqid';
import { isValidElement } from 'react';
import { Route as reactRoute } from 'react-router-dom';

class Route {
    constructor({
        path = '/',
        main = null,
        sidebar = null,
        component = null,
        label = '',
        exact = false,
        fails = false
    }) {
        this.path = path;
        this.fails = fails;
        // if (component) {
        //     if (Array.isArray(component) ? component.every(isValidElement) : isValidElement(component)) {
        //         console.error('component is not valid react element');
        //     }
        // }
        this.component = component;

        this.main = main;
        this.sidebar = sidebar;
        this.label = label;
        this.exact = exact;
        this.key = uniqid();
        // this.render = function (props) {
        //     return component.type;
        // };
    }
}

class List {
    constructor() {

    }
}


class Routes {
    constructor(list) {
        console.log('list', list);

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
            const { component, sidebar, main, key, path, exact, fails } = item;
            if (fails) {
                debugger;
            }
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
            // console.log('con', con);
            // console.log('side', side);
            // console.log('ma', ma);
            return {
                [con ? 'component' : null]: con,
                sidebar: side,
                main: ma,
                exact,
                path,
                key
            };
        });
    }
}


class Ya extends Routes {
    constructor(list) {
        super(list);
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
            console.log('con', con);

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
