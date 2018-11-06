import reduce from 'lodash/reduce';
import { Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Context, { Consumer } from '../../routes/services/context/device';
import { Helper } from '../../routes/services/Router';

const MyRoute = (route) => {
    // const isMobile = useContext(Context);
    // const keys = reduce(route, Helper.handleRoute(isMobile), {});
    // console.log('route', route);
    return (
        <Consumer render={(device) => {
            const keys = reduce(route, Helper.handleRoute(device.isMobile()), {});
            return (
                <Route {...Object.assign({}, route, keys)} />
            );
        }}
        />
    );
};

export default React.memo(MyRoute);
