import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route as R } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Providers from './providers';
import { Provider as ThemeProvider } from '../services/context/themes';
import { Provider as DeviceProvider, Consumer as DeviceConsumer } from '../services/context/device';
import { Provider as SidebarProvider, Consumer as SidebarConsumer } from '../services/context/sidebar';
import apiProviders from '../../api/providers';
import routes from './routes';
import Route from '../../components/Route';

import Header from './Header';
import Newsletter from './Newsletter';

import themeConfig from '../../theme';

const theme = createMuiTheme({
    // palette: {
    //     secondary: brown
    // },
    typography: {
        // Tell Material-UI what the font-size on the html element is.
        // htmlFontSize: 10,
        useNextVariants: true,
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
            //     color:    color: #ff8080;blue
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

const App = ({ userAgent }) => (

    <R render={(props) => {
        const { staticContext } = props;
        const context = global.window ? global.window.appData : staticContext;
        if (global.window) {
            delete global.window.appData;
        }
        return (
            <DeviceProvider theme={themeConfig} userAgent={userAgent}>
                <Providers
                    context={context}
                    providers={apiProviders.concat(ThemeProvider)}
                >
                    <MuiThemeProvider theme={theme}>
                        <DeviceConsumer render={(deviceProps) => {
                            const isMobile = deviceProps.isMobile();
                            const Head = isMobile ? Header[0] : Header[1];
                            const News = isMobile ? Newsletter[0] : Newsletter[1];
                            const basicRoutes = (
                                <Fragment>
                                    <button onClick={deviceProps.toggle}>Toggle Mode</button>
                                    <Head />
                                    {routes
                                        .map(route => <Route key={route.key} {...route} />)}
                                    <News />
                                </Fragment>
                            );

                            return isMobile ? (
                                <SidebarProvider>
                                    <Fragment>
                                        <SidebarConsumer />
                                        {basicRoutes}
                                    </Fragment>
                                </SidebarProvider>
                            ) : basicRoutes;
                        }}
                        />
                    </MuiThemeProvider>
                </Providers>
            </DeviceProvider>
        );
    }}
    />
);

App.defaultProps = {
    staticContext: {}
};

App.propTypes = {
    userAgent: PropTypes.string.isRequired,
    staticContext: PropTypes.shape({})
};

export default App; // memo here has no route updates TODO CHECK IT
