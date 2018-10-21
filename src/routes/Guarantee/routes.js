import uniqid from 'uniqid';
import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomerService from './CustomerService';
import LifetimeWarranty from './LifetimeWarranty';

// import Shipping from './Shipping';
// import Engraving from './Engraving';
// import Returns from './Returns';
// import Update from './Update';
import SlideBar from './SlideBar';
import GuaranteeContextComp from './GuaranteeContextComp';

const routes = [
    {
        path: '/guarantee',
        component: () => <Redirect to="/guarantee/customer-service" />,
        exact: true,
        key: uniqid()
    },
    {
        path: '/guarantee/customer-service',
        component: CustomerService,
        sidebar: SlideBar,
        key: uniqid(),
        label: '24/7 Customer Service',
        headerLabel: '24/7 Customer Service',
    },
    {
        path: '/guarantee/:id',
        component: GuaranteeContextComp,
        sidebar: SlideBar,
        key: uniqid(),
        label: 'Lifetime Warranty',
        headerLabel: 'Lifetime Warranty',
    }

];

function getRoutesByType(isMobile) {
    return routes.reduce((acc, next) => {
        if (next.component) {
            return acc.concat(Object.assign({}, next, {
                component: Array.isArray(next.component) ? isMobile ? next.component[0] : next.component[1] : next.component
            }));
        } else {
            if (!next.main) {
                if (next.sidebar) {
                    return acc.concat(Object.assign({}, next, {
                        sidebar: Array.isArray(next.sidebar) ? isMobile ? next.sidebar[0] : next.sidebar[1] : next.sidebar
                    }));
                } else {
                    return acc.concat(next);
                }
            } else {
                return acc.concat(Object.assign({}, next, {
                    main: Array.isArray(next.main) ? isMobile ? next.main[0] : next.main[1] : next.main
                }));
            }
        }
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

export default {
    getRoutesByType,
    getLinks
};
