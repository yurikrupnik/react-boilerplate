import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from './api';

const toggleLoading = prevState => ({ loading: !prevState.loading });

class ProjectsProvider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            loading: false,
            selected: null
        };

        this.setSelected = (selected) => {
            this.setState(() => ({ selected }));
        };

        this.clearSelected = () => {
            this.setState(() => ({ selected: null }));
        };

        this.fetch = (params, cb) => this.setState(toggleLoading,
            () => api.fetch(params)
                .then(data => this.setState(prevState => ({
                    data,
                    loading: !prevState.loading
                }), cb)));
    }

    render() {
        const { loading, data, selected } = this.state;
        const { children } = this.props;
        return (
            <Provider value={{
                data,
                loading,
                selected,
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

ProjectsProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default ProjectsProvider;
