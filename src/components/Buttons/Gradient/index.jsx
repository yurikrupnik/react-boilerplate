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
    style: {},
    handleClick: () => {
    }
};

Gradient.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string)
};

export default Gradient;
