import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import { parse } from 'device-detector';
// import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider as ThemeProvider } from '../contexts/themes';
import { Provider as DeviceProvider, Consumer as DeviceConsumer } from '../contexts/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from './sidebar';
import apiProviders from '../../api/providers';
import routes from '../../routes';

// import educationRoutes from '../../routes/Education/routes';


const App = () => (
    <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
        <DeviceConsumer render={(deviceProps) => {
            const isMobile = deviceProps.isMobile();
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


export default App;
