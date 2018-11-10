import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from '../api';
import { toggleLoading } from '../../helpers';

class CurrencyProvider extends Component {
    static provider() {
        return api.provider;
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: props.initData,
            loading: false,
            selected: '',
            lastFetch: ''
        };
        this.fetch = this.fetch.bind(this);
        this.toggleCallback = this.toggleCallback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetch(params, cb) {
        this.setState(toggleLoading, this.toggleCallback(params, cb));
    }

    toggleCallback(params, cb) {
        return () => api.fetch(params)
            .then((data) => {
                this.setState(prevState => ({
                    data,
                    loading: !prevState.loading,
                    selected: data[0].DisplaySymbol
                }), cb);
            })
            .catch((error) => {
                this.setState(prevState => ({
                    error,
                    loading: !prevState.loading
                }));
            });
    }

    handleChange(event) {
        const { target } = event;
        const { value } = target;
        this.setState({ selected: value });
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                fetch: this.fetch,
                handleChange: this.handleChange
            }}
            >
                {children}
            </Provider>
        );
    }
}

CurrencyProvider.defaultProps = {
    initData: []
};

CurrencyProvider.propTypes = {
    children: PropTypes.element.isRequired,
    initData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default CurrencyProvider;
