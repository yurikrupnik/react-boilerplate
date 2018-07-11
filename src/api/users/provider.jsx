import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from './api';
// import { toggleLoading } from '../utils';

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
        this.fetch = this.fetch.bind(this);
        this.toggleCallback = this.toggleCallback.bind(this);
    }

    fetch(params, cb) {
        this.setState(toggleLoading, this.toggleCallback(params, cb));
    }

    toggleCallback(params, cb) {
        return () => api.fetch(params)
            .then(this.handleSuccess(cb));
    }

    handleSuccess(cb) {
        return (data = []) => {
            this.setState(prevState => ({
                data,
                loading: !prevState.loading
            }), cb);
        };
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                fetch: this.fetch
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
