import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { parse } from 'device-detector';
import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider } from '../contexts/themes/index';
import { Provider as DeviceProvider, Consumer as DeviceConsumer } from '../contexts/device';
import apiProviders from '../../api/providers';
// import routes from '../routes';
import appRoutes from '../../routes';
import educationRoutes from '../../routes/Education/routes';
// import Layout from './layout';


// console.log('Route.ptopTypes', Route);
// const MyRoute = (props) => {
//     return (
//         <Route/>
//     );
// };
//
// class MyRoute extends Route {
//     constructor(props) {
//         super(props);
//         this.state = parse(global.navigator.userAgent);
//
//         this.isMobile = this.isMobile.bind(this);
//         this.filterRoutesByDeviceType = this.filterRoutesByDeviceType.bind(this);
//     }
//
//     isMobile() {
//         const { type } = this.state;
//         return type.toLowerCase() === 'mobile';
//     }
//
//     handleComponent() {
//         const { component } = this.props;
//         if (Array.isArray(component)) {
//             return this.isMobile() ? component[0] : component[1];
//         } else {
//             return component;
//         }
//     }
//
//     render() {
//         return (
//             <Route {...Object.assign({}, this.props, {
//                 component: this.handleComponent()
//             })}
//             />
//         );
//     }
// }
//
// class Device extends Component {
//     constructor(props) {
//         super(props);
//         this.state = parse(global.navigator.userAgent);
//         this.isMobile = this.isMobile.bind(this);
//     }
//
//     isMobile() {
//         const { type } = this.state;
//         return type.toLowerCase() === 'mobile';
//     }
//
//     render() {
//         const { render } = this.props;
//         return render({
//             isMobile: this.isMobile
//         });
//     }
// }
//
// Device.defaultProps = {
//     render: null
// };
//
// Device.propTypes = {
//     render: PropTypes.func
// };

const App = () => {

    // const ro = routes.map(route => (
    //     <Route key={route.key} {...route} />
    // ));
    // console.log('routes', routes);

    return (
        <Providers providers={apiProviders.concat(Provider, DeviceProvider)}>
            <DeviceConsumer routes={appRoutes} />
        </Providers>
    );
};

App.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
