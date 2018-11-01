import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';

class SidebarProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    render() {
        const { children } = this.props;
        const { open } = this.state;
        return (
            <Provider value={{
                open,
                toggle: this.toggle
            }}
            >
                {children}
            </Provider>
        );
    }
}

SidebarProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default SidebarProvider;
