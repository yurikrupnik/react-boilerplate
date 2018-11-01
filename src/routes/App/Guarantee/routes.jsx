import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomerService from './CustomerService/index';
import SideBar from './SideBar/index';
import GuaranteeContextComp from './GuaranteeContext/index';
import Router from '../../services/Router/index';

const routes = [
    {
        path: '/guarantee',
        component: () => (<Redirect to="/guarantee/customer-service" />),
        exact: true
    },
    {
        path: '/guarantee/customer-service',
        component: CustomerService,
        sidebar: SideBar
    },
    {
        path: '/guarantee/:id',
        component: GuaranteeContextComp,
        sidebar: SideBar
    }
];

export default Router.create(routes);
