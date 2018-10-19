import uniqid from 'uniqid';
import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomerService from './CustomerService';
import LifetimeWarranty from './LifetimeWarranty';
import Shipping from './Shipping';
import Engraving from './Engraving';
import Returns from './Returns';
import Update from './Update';
import SideBar from './SideBar';

const routes = [
    {
        path: '/guarantee',
        // component: SideBar,
        component: () => (<Redirect to="/guarantee/customer-service" />),
        exact: true,
        key: uniqid()
    },
    {
        path: '/guarantee/customer-service',
        component: CustomerService,
        sidebar: SideBar,
        key: uniqid(),
        label: '24/7 Customer Service',
        headerLabel: '24/7 Customer Service',
        // exact: true
    },
    {
        path: '/guarantee/lifetime-warranty',
        component: LifetimeWarranty,
        sidebar: SideBar,
        key: uniqid(),
        label: 'Lifetime Warranty',
        headerLabel: 'Lifetime Warranty'
    },
    {
        path: '/guarantee/free-shipping',
        component: Shipping,
        sidebar: SideBar,
        key: uniqid(),
        label: 'Free Shipping Worldwide',
        headerLabel: 'FREE INTERNATIONAL SHIPPING'
    },
    {
        path: '/guarantee/hassle-free-returns',
        component: Returns,
        sidebar: SideBar,
        key: uniqid(),
        label: 'Hassle-Free Returns',
        headerLabel: '100% MONEY BACK GUARANTEE',
        extraLabel: ' with 100% Money Back Guarantee'
    },
    {
        path: '/guarantee/free-engraving',
        component: Engraving,
        sidebar: SideBar,
        key: uniqid(),
        label: 'Free Engraving'
    },
    {
        path: '/guarantee/lifetime-upgrade',
        component: Update,
        sidebar: SideBar,
        key: uniqid(),
        label: 'Lifetime Upgrade'
    }
];

const headerRoutes = routes.reduce((acc, next) => {
    return next.headerLabel ? acc.concat({
        label: next.headerLabel,
        path: next.path
    }) : acc;
}, []);

export default routes;

export { headerRoutes };
