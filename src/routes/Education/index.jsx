import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Consumer as Device } from '../../components/contexts/device';
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

// Education.propTypes = {
//     match: PropTypes.shape({}).isRequired,
//     location: PropTypes.shape({}).isRequired
// };

export default Education;
