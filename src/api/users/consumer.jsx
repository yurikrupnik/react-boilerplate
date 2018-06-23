import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import List from '../../components/List';

class DataContainer extends Component {
    componentDidMount() {
        const { fetch, data } = this.props;
        if (!data.length) {
            fetch({});
        }
    }

    render() {
        const { render } = this.props;
        if (typeof render === 'function') {
            return render(Object.assign({}, this.props, { render: null }));
        }
        return (
            <List {...this.props} />
        );
    }
}

DataContainer.defaultProps = {
    render: null,
    data: []
};

DataContainer.propTypes = {
    render: PropTypes.func,
    fetch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

const UsersConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

UsersConsumer.defaultProps = {
    render: null
};

UsersConsumer.propTypes = {
    render: PropTypes.func
};

export default UsersConsumer;
