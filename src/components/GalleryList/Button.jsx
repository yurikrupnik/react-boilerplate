import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

function Button(props) {
    const { children, onClick, isVisited } = props;
    const className = `${styles.button} ${isVisited ? styles.visited : ''}`;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;
