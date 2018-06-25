import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from './api';

const toggleLoading = prevState => ({ loading: !prevState.loading });

class UsersProvider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            loading: false,
            selected: null,
            lastFetch: ''
        };
        this.setSelected = this.setSelected.bind(this);
        this.clearSelected = this.clearSelected.bind(this);
        this.fetch = (params, cb) => this.setState(toggleLoading,
            () => api.fetch(params)
                .then(data => this.setState(prevState => ({
                    data,
                    loading: !prevState.loading
                }), cb)));
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState', prevState); // eslint-disable-line no-console
    }

    setSelected(selected) {
        this.setState(() => ({ selected }));
    }

    clearSelected() {
        this.setState(() => ({ selected: null }));
    }

    render() {
        const { children } = this.props;
        const {
            loading,
            data,
            selected,
            lastFetch
        } = this.state;
        return (
            <Provider value={{
                data,
                loading,
                selected,
                lastFetch,
                fetch: this.fetch,
                setSelected: this.setSelected,
                clearSelected: this.clearSelected
            }}
            >
                {children}
            </Provider>
        );
    }
}

UsersProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default UsersProvider;
