import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DataContainer from '../dataContainer';

const LooseDiamondsConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

LooseDiamondsConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default LooseDiamondsConsumer;
