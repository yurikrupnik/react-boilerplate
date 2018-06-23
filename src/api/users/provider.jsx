import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import usersApi from './api';

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
        this.fetch = this.fetch.bind(this);
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

    fetch(params, cb) {
        // return usersApi.fetch(params).then((data) => {
        //     console.log('data', data); // eslint-disable-line no-console
        //     return data;
        //     // return this.setState((prevState) => {
        //     //     // console.log('prevState', prevState); // eslint-disable-line no-console
        //     //     return Object.assign({}, prevState, { data, loading: !prevState.loading });
        //     // }, cb);
        // });
        console.log('params', params); // eslint-disable-line no-console
        return this.setState((prevState) => {
            // console.log('prevState', prevState); // eslint-disable-line no-console
            // return Object.assign({}, prevState,
            return {
                loading: !prevState.loading,
                lastFetch: Date.now()
            };
            // );
        }, () => {
            // console.log('a', a); // eslint-disable-line no-console
            return usersApi.fetch(params).then((data) => {
                console.log('data', data); // eslint-disable-line no-console
                return this.setState((prevState) => {
                    // console.log('prevState', prevState); // eslint-disable-line no-console
                    return Object.assign({}, prevState, { data, loading: !prevState.loading });
                }, cb);
            });
        });
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

// UsersProvider.defaultProps = {
//     data: []
// };

UsersProvider.propTypes = {
    children: PropTypes.element.isRequired,
    // data: PropTypes.arrayOf(PropTypes.shape({}))
};

export default UsersProvider;
