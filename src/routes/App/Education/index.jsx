import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Consumer as Device } from '../../services/context/device';
import routes from './routes';

const Education = () => (
    <Device render={(device) => {
        const isMobile = device.isMobile();
        return (
            <Fragment>
                {routes.getRoutesByType(isMobile).map(route => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                <div className="row">
                    <div className="col-xs-3">
                        {routes.getRoutesByType(isMobile).map(route => (
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </div>
                    <div className="col-xs-9">
                        {routes.getRoutesByType(isMobile).map(route => (
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }}
    />
);

const Mobile = () => {
    return (
        <Device render={() => {
            return (
                <div>
                    educatopm mpbile
                    {routes.getRoutesByType(true).map(route => (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>
            );
        }}
        />
    );
};

const Dekstop = () => {
    return (
        <Device render={() => {
            return (
                <div>
                    educatopm desktop
                    {routes.getRoutesByType(false).map(route => (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>
            );
        }}
        />
    );
};
// Education.propTypes = {
//     match: PropTypes.shape({}).isRequired,
//     location: PropTypes.shape({}).isRequired
// };

export default [Mobile, Dekstop];
