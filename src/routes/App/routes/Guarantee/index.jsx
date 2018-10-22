import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
// import PropTypes from 'prop-types';
// import uniqid from 'uniqid';
import routes from './routes';

const Guarantee = () => {
    return (
        <Fragment>
            <h2 className={styles.headerGuarantee}>
                The James Allen Guarantee
            </h2>
            <div className="row">
                <div className="col-xs-3">
                    <Switch>
                        {routes.getRoutesByType(false).map(route => (
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </Switch>
                </div>
                <div className="col-xs-8">
                    <Switch>
                        {routes.getRoutesByType(false).map(route => (
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Fragment>
    );
};

export default Guarantee;
