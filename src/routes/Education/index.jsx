import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Consumer as Device } from '../../components/contexts/device';
import routes, { normalRoutes } from './routes';

const Education = () => (
    <Device render={(device) => {
        const isMobile = device.isMobile();
        return (
            <Fragment>
                {normalRoutes.map(route => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                <div className="row">
                    <div className="col-xs-3">
                        {normalRoutes.map(route => (
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </div>
                    <div className="col-xs-9">
                        {normalRoutes.map(route => (
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
