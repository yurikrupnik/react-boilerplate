import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Providers from './providers';
import { Provider as ThemeProvider } from '../../components/contexts/themes';
import { Provider as DeviceProvider, Consumer as Device } from './services/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from './sidebar';
import apiProviders from '../../api/providers';
import routes from './routes';
import themeConfig from '../../theme';

const theme = createMuiTheme({
    // palette: {
    //     secondary: brown
    // },
    typography: {
        // Tell Material-UI what the font-size on the html element is.
        // htmlFontSize: 10,
        button: {
            padding: '20px',
            '&:hover': {
                backgroundColor: 'transparent'
            }
            // root: {
            // primary: green,
            // color: {
            //     main: green
            // },
            // root: {
            //     color: blue
            // }
            // }
        }
    },
    palette: {
        primary: {
            main: themeConfig.colors.primary,
        }
    },
    // button: {
    //     root: {
    //         color: blue,
    //     }
    // },
    overrides: {
        // MuiButton: {
        //     // textPrimary: 'red',
        //     // backgroundColor: 'transparent',
        //     disableRipple: false,
        //     root: {
        //         // backgroundColor: 'transparent',
        //         padding: '2px', // works
        //         // color: 'red',
        //         // primary: 'purple',
        //         // color: red,
        //         // padding: '2px',
        //         // '&:hover': {
        //         //     background: 'blue'
        //         // },
        //         '&:hover': {
        //             backgroundColor: 'transparent',
        //         },
        //     },
        // },
        // MuiButtonBase: {
        //     root: {
        //         padding: '2px',
        //     },
        //     // '&:hover': {
        //     //     background: 'blue'
        //     // }
        //     // secondary: blue,
        //     // primary: red,
        //     // color: {
        //     // primary: blue
        //     // },
        //     // The properties to apply
        //     // disableRipple: true, // No more ripple, on the whole application 💣!
        // },
    }
});

const App = () => (
    <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
        <MuiThemeProvider theme={theme}>
            <Device render={(deviceProps) => {
                const isMobile = deviceProps.isMobile();
                const basicRoutes = (
                    <Fragment>
                        {routes.getRoutesByType(isMobile)
                            .map(route => <Route key={route.key} {...route} />)}
                    </Fragment>
                );

                return isMobile ? (
                    <SidebarProvider>
                        <Fragment>
                            <SidebarConsumer links={routes.getLinks()} />
                            {basicRoutes}
                        </Fragment>
                    </SidebarProvider>
                ) : basicRoutes;
            }}
            />
        </MuiThemeProvider>
    </Providers>
);


export default App;
