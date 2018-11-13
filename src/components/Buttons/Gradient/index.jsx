/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Gradient = ({ handleClick, children }) => (
    <button
        onClick={handleClick}
        className={styles.button}
    >
        {children}
    </button>
);


Gradient.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Gradient;
