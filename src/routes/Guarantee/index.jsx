import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import uniqid from 'uniqid';
import { Route } from 'react-router-dom';
import routes from './routes';

const Guarantee = () => {
    return (
        <Fragment>
            <h2>
                The James Allen Guarantee
            </h2>
            <div className="row">
                <div className="col-xs-3">
                    {routes.map(route => (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </div>
                <div className="col-xs-9">
                    {routes.map(route => (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Guarantee;
