import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import { parse } from 'device-detector';
// import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider as ThemeProvider } from '../contexts/themes';
import { Provider as DeviceProvider, Consumer as Device } from '../contexts/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from './sidebar';
import apiProviders from '../../api/providers';
import routes from '../../routes';
import config from '../../config';

if (!config.isProd) {
    console.log('not produictopm');

}
// import educationRoutes from '../../routes/Education/routes';


const App = () => (
    <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
        <Device render={(deviceProps) => {
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
