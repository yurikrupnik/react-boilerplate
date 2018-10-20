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
import routes from '../../routes';

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
                        {routes.handleComponents(isMobile).map((route) => {
                            return (
                                <Route key={route.key} {...route} />
                            );
                        })}
                    </Fragment>
                );

                return isMobile ? (
                    <SidebarProvider>
                        <Fragment>
                            <SidebarConsumer links={routes.getLinks()} />
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
