import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';

class DevProvider extends Component {
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

DevProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default DevProvider;
