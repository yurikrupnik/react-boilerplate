import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

class SidebarProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount() {
        global.window.addEventListener('keydown', this.handleEvent);
    }

    componentWillUnmount() {
        global.window.removeEventListener('keydown', this.handleEvent);
    }

    handleEvent(event) {
        if (event.key === 'Control') {
            this.toggle();
        }
    }

    toggle() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    render() {
        const { children } = this.props;
        const { open } = this.state;
        return (
            <Context.Provider value={{
                open,
                toggle: this.toggle
            }}
            >
                {children}
            </Context.Provider>
        );
    }
}

SidebarProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default SidebarProvider;
