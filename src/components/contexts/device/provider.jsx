import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'device-detector';
import { Provider } from './context';

class DeviceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = parse(global.navigator.userAgent);

        this.isMobile = this.isMobile.bind(this);
        this.filterRoutesByDeviceType = this.filterRoutesByDeviceType.bind(this);
    }

    isMobile() {
        const { type } = this.state;
        return type.toLowerCase() === 'mobile';
    }

    filterRoutesByDeviceType(routes) {
        // console.log('filterRoutesByDeviceType routes', routes);
        //
        // const { type } = this.state;
        // return routes.reduce((acc, nextRoute) => {
        //     // this.isMobile() ? nextRoute[0] : nextRoute[1];
        //     return acc.concat(this.isMobile() ? nextRoute.components[0] : nextRoute.components[1]);
        // }, []);
    }

    // toggle() {
    //     this.setState(prevState => ({ open: !prevState.open }));
    // }

    render() {
        const { children } = this.props;
        // const { open } = this.state;
        return (
            <Provider value={{
                // ...this.state,
                isMobile: this.isMobile,
                filterByDevice: this.filterRoutesByDeviceType
            }}
            >
                {children}
            </Provider>
        );
    }
}

DeviceProvider.propTypes = {
    children: PropTypes.element.isRequired,
    // device: PropTypes.shape({}).isRequired
    // type: PropTypes.string.isRequired
};

export default DeviceProvider;
