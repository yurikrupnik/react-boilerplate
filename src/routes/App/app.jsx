import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Providers from './providers';
import { Provider as ThemeProvider } from '../../components/contexts/themes';
import { Provider as DeviceProvider, Consumer as DeviceConsumer } from './services/device';
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appData: (global.window && global.window.appData) || {}
        };
        if (global.window) {
            delete global.window.appData;
        }
    }

    render() {
        // console.log('this.state.appData', this.state.appData);
        const { userAgent } = this.props;
        return (
            <DeviceProvider userAgent={userAgent}>
                <Providers providers={apiProviders.concat(ThemeProvider)}>
                    <MuiThemeProvider theme={theme}>
                        <DeviceConsumer render={(deviceProps) => {
                            const isMobile = deviceProps.isMobile();
                            const basicRoutes = (
                                <Fragment>
                                    <Button onClick={deviceProps.toggle}>Toggle</Button>
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
            </DeviceProvider>
        );
    }
}


// const App = () => (
//     <Providers providers={apiProviders.concat(ThemeProvider, DeviceProvider)}>
//         <MuiThemeProvider theme={theme}>
//             <Device render={(deviceProps) => {
//                 const isMobile = deviceProps.isMobile();
//                 const basicRoutes = (
//                     <Fragment>
//                         {routes.getRoutesByType(isMobile)
//                             .map(route => <Route key={route.key} {...route} />)}
//                     </Fragment>
//                 );
//
//                 return isMobile ? (
//                     <SidebarProvider>
//                         <Fragment>
//                             <SidebarConsumer links={routes.getLinks()} />
//                             {basicRoutes}
//                         </Fragment>
//                     </SidebarProvider>
//                 ) : basicRoutes;
//             }}
//             />
//         </MuiThemeProvider>
//     </Providers>
// );


export default App;
