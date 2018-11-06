import React from 'react';
import reduce from 'lodash/reduce';
import { Route } from 'react-router-dom';
import { Consumer } from '../../routes/services/context/device';
import { Helper } from '../../routes/services/Router';

const MyRoute = route => (
    <Consumer render={(device) => {
        // console.log('route', route);
        // console.log('typeof route.component', typeof route.component);
        const keys = reduce(route, Helper.handleRoute(device.isMobile()), {});
        return (
            <Route {...Object.assign({}, route, keys)} />
        );
    }}
    />
);

export default React.memo(MyRoute);
