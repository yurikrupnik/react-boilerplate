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
        this.state = {
            type: parse(props.userAgent).type
        };
        this.isMobile = this.isMobile.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    setMobile() {
        document.body.style.fontSize = parseInt(this.props.theme.typography.fontSize, 10) + 'px';
        document.body.style.color = this.props.theme.colors.mobile;
    }

    setDesktop() {
        document.body.style.fontSize = parseInt(this.props.theme.typography.fontSize, 10) + 1 + 'px';
        document.body.style.color = this.props.theme.colors.desktop;
    }

    componentDidUpdate(nextProp, nextState) {
        const { type } = this.state;
        if (nextState.type !== type) {
            if (this.isMobile()) {
                this.setMobile();
            } else {
                this.setDesktop();
            }
        }
    }

    isMobile() {
        const { type } = this.state;
        return type.toLowerCase() === DeviceProvider.types()[0].toLowerCase();
    }

    toggle() {
        const types = DeviceProvider.types();
        this.setState(prevState => Object.assign({}, prevState, {
            type: prevState.type.toLowerCase() === types[0].toLowerCase()
                ? types[1] : types[0]
        }));
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
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
