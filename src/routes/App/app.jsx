import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Providers from './providers';
import { Provider as ThemeProvider } from '../../components/contexts/themes';
import { Provider as DeviceProvider, Consumer as Device } from './services/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from './sidebar';
import apiProviders from '../../api/providers';
import routes from './routes';

const App = () => (
    <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
        <Device render={(deviceProps) => {
            const isMobile = deviceProps.isMobile();
            const routess = (
                <Fragment>
                    {routes.getRoutesByType(isMobile).map((route) => {
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
