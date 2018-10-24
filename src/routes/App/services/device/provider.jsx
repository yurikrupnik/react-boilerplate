import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'device-detector';
import { Provider } from './context';

class DeviceProvider extends Component {
    static types() {
        return ['Mobile', 'Desktop']; // tablet
    }

    constructor(props) {
        super(props);
        // this.types = ['Mobile', 'Desktop']; // tablet
        this.state = parse(props.userAgent);
        this.isMobile = this.isMobile.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    isMobile() {
        const { type } = this.state;
        return type.toLowerCase() === DeviceProvider.types()[0].toLowerCase();
    }

    toggle() {
        const types = DeviceProvider.types();
        this.setState(prevState => Object.assign({}, prevState, {
            type: prevState.type === types[0]
                ? types[1] : types[0]
        }));
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                isMobile: this.isMobile,
                toggle: this.toggle
            }}
            >
                {children}
            </Provider>
        );
    }
}

DeviceProvider.propTypes = {
    children: PropTypes.element.isRequired,
    userAgent: PropTypes.string.isRequired
};

export default DeviceProvider;
