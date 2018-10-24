import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import routes from './routes';
import { Consumer } from '../../services/device';

const Guarantee = () => {
    return (
        <Consumer render={(renderProps) => {
            const isMobile = renderProps.isMobile();
            if (isMobile) {
                return (
                    <div className={styles.root}>
                        <div className={styles.guaranteeContainer}>
                            <Switch>
                                {routes.getRoutesByType(isMobile)
                                    .map(route => (
                                        <Route
                                            key={route.key}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.sidebar}
                                        />
                                    ))}
                            </Switch>
                            <Switch>
                                {routes.getRoutesByType(isMobile)
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
                );
            }
            return (
                <div className={styles.guaranteeContainer}>
                    <h2 className={styles.guaranteeHeader}>
                        The James Allen Guarantee
                    </h2>
                    <div className="row">
                        <div className="col-xs-3">
                            <Switch>
                                {routes.getRoutesByType(isMobile)
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
                                {routes.getRoutesByType(isMobile)
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
        }}
        />
    );
};

export default Guarantee;
