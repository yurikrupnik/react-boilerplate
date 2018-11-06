import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import routes from '../routes';

const Desktop = () => (
    <div className={styles.root}>
        <h2 className={styles.header}>
            The James Allen Guarantee
        </h2>
        <div className="row">
            <div className="col-xs-3">
                <Switch>
                    {routes.getRoutesByType(false)
                        .map(route => (
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
                    {routes.getRoutesByType(false)
                        .map(route => (
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
    </div>
);

export default Desktop;
