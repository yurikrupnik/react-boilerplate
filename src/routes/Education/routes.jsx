// import React from 'react';
// import { Redirect } from 'react-router-dom';
import uniqid from 'uniqid';
import Diamonds from './Diamonds';
import Engagement from './Engagement';
import Sidebar from './Sidebar';
// import Loadable from '../../components/Loadable';
import Main from './Main';
// console.log('Main', Main);

// import Main from './Main/Mobile/index';
// import LifetimeWarranty from './LifetimeWarranty';
// import Shipping from './Shipping';
// import Engraving from './Engraving';
// import Returns from './Returns';
// import Update from './Update';

const getByDevice = (isMobile) => {
    return [
        { // find a way to pass routes here
            path: '/education',
            component: isMobile ? Main[0] : Main[1],
            exact: true,
            key: uniqid()
        },
        {
            path: '/education/diamonds',
            main: Diamonds,
            sidebar: Sidebar,
            key: uniqid(),
            label: 'loose diamonds'
        },
        {
            path: '/education/engagement-rings',
            main: Engagement,
            sidebar: Sidebar,
            key: uniqid(),
            label: 'engagement rings'
        },
        // {
        //     path: '/guarantee/lifetime-warranty',
        //     component: LifetimeWarranty,
        //     exact: true,
        //     key: '/guarantee/lifetime-warranty',
        //     label: 'Lifetime Warranty',
        //     headerLabel: 'Lifetime Warranty'
        // },
        // {
        //     path: '/guarantee/free-shipping',
        //     component: Shipping,
        //     exact: true,
        //     key: '/guarantee/free-shipping',
        //     label: 'Free Shipping Worldwide',
        //     headerLabel: 'FREE INTERNATIONAL SHIPPING'
        // },
        // {
        //     path: '/guarantee/hassle-free-returns',
        //     component: Returns,
        //     exact: true,
        //     key: '/guarantee/hassle-free-returns',
        //     label: 'Hassle-Free Returns',
        //     headerLabel: '100% MONEY BACK GUARANTEE',
        //     extraLabel: ' with 100% Money Back Guarantee'
        // },
        // {
        //     path: '/guarantee/free-engraving',
        //     component: Engraving,
        //     exact: true,
        //     key: '/guarantee/free-engraving',
        //     label: 'Free Engraving'
        // },
        // {
        //     path: '/guarantee/lifetime-upgrade',
        //     component: Update,
        //     exact: true,
        //     key: '/guarantee/lifetime-upgrade',
        //     label: 'Lifetime Upgrade'
        // }
    ];
};

const routes = [
    { // find a way to pass routes here
        path: '/education',
        component: Main[0],
        exact: true,
        key: uniqid()
    },
    {
        path: '/education/diamonds',
        main: Diamonds,
        sidebar: Sidebar,
        key: uniqid(),
        label: 'loose diamonds'
    },
    {
        path: '/education/engagement-rings',
        main: Engagement,
        sidebar: Sidebar,
        key: uniqid(),
        label: 'engagement rings'
    },
    // {
    //     path: '/guarantee/lifetime-warranty',
    //     component: LifetimeWarranty,
    //     exact: true,
    //     key: '/guarantee/lifetime-warranty',
    //     label: 'Lifetime Warranty',
    //     headerLabel: 'Lifetime Warranty'
    // },
    // {
    //     path: '/guarantee/free-shipping',
    //     component: Shipping,
    //     exact: true,
    //     key: '/guarantee/free-shipping',
    //     label: 'Free Shipping Worldwide',
    //     headerLabel: 'FREE INTERNATIONAL SHIPPING'
    // },
    // {
    //     path: '/guarantee/hassle-free-returns',
    //     component: Returns,
    //     exact: true,
    //     key: '/guarantee/hassle-free-returns',
    //     label: 'Hassle-Free Returns',
    //     headerLabel: '100% MONEY BACK GUARANTEE',
    //     extraLabel: ' with 100% Money Back Guarantee'
    // },
    // {
    //     path: '/guarantee/free-engraving',
    //     component: Engraving,
    //     exact: true,
    //     key: '/guarantee/free-engraving',
    //     label: 'Free Engraving'
    // },
    // {
    //     path: '/guarantee/lifetime-upgrade',
    //     component: Update,
    //     exact: true,
    //     key: '/guarantee/lifetime-upgrade',
    //     label: 'Lifetime Upgrade'
    // }
];

// const headerRoutes = routes.reduce((acc, next) => {
//     return next.headerLabel ? acc.concat({
//         label: next.headerLabel,
//         path: next.path
//     }) : acc;
// }, []);

export default routes;

// export { headerRoutes };
