import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button/Button';
import styles from './styles.scss';

const PinkUnderLine = ({ children }) => (
    <div>
        {children}
    </div>
);

PinkUnderLine.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};


export default PinkUnderLine;
