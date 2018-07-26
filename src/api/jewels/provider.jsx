import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from './api';

const toggleLoading = prevState => ({ loading: !prevState.loading });

class JewelsProvider extends Component {
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
            .then((response) => {
                const { Results } = response;
                const { Jewel } = Results;

                this.setState(prevState => ({
                    data: Jewel,
                    loading: !prevState.loading
                }), cb);
            })
            .catch((error) => {
                this.setState(prevState => ({
                    error,
                    loading: !prevState.loading
                }));
            });
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

JewelsProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default JewelsProvider;
