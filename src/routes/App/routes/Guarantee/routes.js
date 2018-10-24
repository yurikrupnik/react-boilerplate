import uniqid from 'uniqid';
import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomerService from './CustomerService';
import SideBar from './SideBar';
import GuaranteeContextComp from './GuaranteeContext';

const routes = [
    {
        path: '/guarantee',
        component: () => (<Redirect to="/guarantee/customer-service" />),
        exact: true,
        key: uniqid()
    },
    {
        path: '/guarantee/customer-service',
        component: CustomerService,
        sidebar: SideBar,
        key: uniqid()
    },
    {
        path: '/guarantee/:id',
        component: GuaranteeContextComp,
        sidebar: SideBar,
        key: uniqid()
    }
];

function getRoutesByType(isMobile) {
    return routes.reduce((acc, next) => {
        let component;
        let sidebar;
        let main;

        if (next.component) {
            component = Array.isArray(next.component) ? isMobile ? next.component[0] : next.component[1] : next.component;
        }
        if (next.main) {
            main = Array.isArray(next.main) ? isMobile ? next.main[0] : next.main[1] : next.main;
        }
        if (next.sidebar) {
            sidebar = Array.isArray(next.sidebar) ? isMobile ? next.sidebar[0] : next.sidebar[1] : next.sidebar;
        }
        return acc.concat(Object.assign({}, next, { sidebar, component, main }));
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
