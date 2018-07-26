import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DataContainer from '../dataContainer';

const JewelsConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

JewelsConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default JewelsConsumer;
