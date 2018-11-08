import React, { Fragment } from 'react';
import routes from './routes';
import Route from '../../../components/Route';

const EducationRoutes = () => (
    <Fragment>
        {routes.map(route => (
            <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                component={route.main}
            />
        ))}
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

export default EducationRoutes;
