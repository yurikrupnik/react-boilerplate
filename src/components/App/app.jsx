import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { parse } from 'device-detector';
import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider as ThemeProvider } from '../contexts/themes';
import { Provider as DeviceProvider, Consumer as DeviceConsumer } from '../contexts/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from './sidebar';
import apiProviders from '../../api/providers';
// import routes from '../routes';
import { getRoutes, getLinks } from '../../routes';

// import educationRoutes from '../../routes/Education/routes';


const App = () => {
    return (
        <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
            <DeviceConsumer render={(deviceProps) => {
                const isMobile = deviceProps.isMobile();
                console.log('isMobile', isMobile);
                // const currentRoutes = routes.map(routes)

                const routess = (
                    <Fragment>
                        {getRoutes().map((route) => {
                            const { component, sidebar, main } = route;
                            let con, side, ma;
                            if (Array.isArray(component)) {
                                con = isMobile ? component[0] : component[1];
                            } else {
                                con = component;
                            }

                            if (Array.isArray(sidebar)) {
                                side = isMobile ? component[0] : component[1];
                            } else {
                                side = sidebar;
                            }

                            if (Array.isArray(main)) {
                                ma = isMobile ? component[0] : component[1];
                            } else {
                                ma = main;
                            }
                            return (
                                <Route
                                    component={con}
                                    key={route.key}
                                    exact={route.exact}
                                    path={route.path}
                                    main={ma}
                                    sidebar={side}
                                />
                            );
                        })}
                    </Fragment>
                );

                return isMobile ? (
                    <SidebarProvider>
                        <Fragment>
                            <SidebarConsumer links={getLinks()} />
                            {routess}
                        </Fragment>
                    </SidebarProvider>
                ) : routess;
            }}
            />
        </Providers>
    );
};

App.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
