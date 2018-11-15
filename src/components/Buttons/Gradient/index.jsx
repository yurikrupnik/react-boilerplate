/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const Gradient = ({
    handleClick, children, href, style
}) => (
    <button
        onClick={handleClick}
        className={styles.button}
        style={style}
    >
        {href
            ? (
                <a href={href}>
                    {children}
                </a>
            )
            : (
                <div>
                    {children}
                </div>
            )
        }
    </button>
);


Gradient.defaultProps = {
    href: '',
    style: {}
};

Gradient.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    style: PropTypes.object,
};

export default Gradient;
