import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'device-detector';
import { Provider } from './context';

class DeviceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = parse(global.navigator.userAgent);

        this.isMobile = this.isMobile.bind(this);
    }

    isMobile() {
        const { type } = this.state;
        return type.toLowerCase() === 'mobile';
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                isMobile: this.isMobile
            }}
            >
                {children}
            </Provider>
        );
    }
}

DeviceProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default DeviceProvider;
