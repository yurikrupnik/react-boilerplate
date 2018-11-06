import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import routes from '../routes';

const Mobile = () => (
    <div className={styles.root}>
        <Switch>
            {routes.getRoutesByType(true)
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
            {routes.getRoutesByType(true)
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
);

export default Mobile;
