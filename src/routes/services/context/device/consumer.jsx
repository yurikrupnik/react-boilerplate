import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';

function DeviceConsumer({ render }) {
    return (
        <Consumer>
            {props => render(props)}
        </Consumer>
    );
}

DeviceConsumer.defaultProps = {
    render: null
};

DeviceConsumer.propTypes = {
    render: PropTypes.func
};

export default DeviceConsumer;
