import uniqid from 'uniqid';
import { Route as reactRoute } from 'react-router-dom';

// console.log('reactRoute', reactRoute);

class Route {
    constructor({
                    path = '/',
                    // components = [],
                    main = [],
                    sidebar = [],
                    component,
                    label = '',
                    exact = false
                }) {
        // console.log('component', component);

        this.path = path;
        // this.components = components;
        this.component = component;
        this.main = main;
        this.sidebar = sidebar;
        // this.component = [...component];
        // this.component = component[0];
        this.label = label;
        this.exact = exact;
        this.key = uniqid();
        // this.type = 'desktop';
    }
}

const getRoutesByDevice = routes => isMobile => {
};


export default Route;
export { getRoutesByDevice };
