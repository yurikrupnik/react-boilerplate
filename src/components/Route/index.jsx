import React from 'react';
import reduce from 'lodash/reduce';
import { Route } from 'react-router-dom';
import { Consumer } from '../../routes/services/context/device';

const componentTypes = key => ['component', 'sidebar', 'main'].includes(key);

const handleRoute = isMobile => (acc, val, key) => {
    if (componentTypes(key)) {
        if (Array.isArray(val)) {
            acc[key] = isMobile // eslint-disable-line no-param-reassign
                ? val[0] : val[1];
        } else {
            acc[key] = val; // eslint-disable-line no-param-reassign
        }
    }
    return acc;
};

const MyRoute = route => (
    <Consumer render={(device) => {
        const keys = reduce(route, handleRoute(device.isMobile()), {});
        return (
            <Route {...Object.assign({}, route, keys)} />
        );
    }}
    />
);

export default MyRoute;
