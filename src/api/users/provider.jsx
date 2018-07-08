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
        this.fetch = this.fetch.bind(this);
    }

    fetch(params, cb) {
        this.setState(toggleLoading,
            () => api.fetch(params)
                .then(data => this.setState(prevState => ({
                    data,
                    loading: !prevState.loading
                }), cb)));
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
