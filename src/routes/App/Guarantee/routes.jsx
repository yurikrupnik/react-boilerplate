import uniqid from 'uniqid';
import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomerService from './CustomerService/index';
import SideBar from './SideBar/index';
import GuaranteeContextComp from './GuaranteeContext/index';

const routes = [
    {
        key: uniqid(),
        path: '/guarantee',
        component: () => (<Redirect to="/guarantee/customer-service" />),
        exact: true
    },
    {
        key: uniqid(),
        path: '/guarantee/customer-service',
        component: CustomerService,
        sidebar: SideBar
    },
    {
        key: uniqid(),
        path: '/guarantee/:id',
        component: GuaranteeContextComp,
        sidebar: SideBar
    }
];

export default routes;
