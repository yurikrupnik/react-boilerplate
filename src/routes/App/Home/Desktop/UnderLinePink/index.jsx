/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const PinkUnderLine = ({
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


PinkUnderLine.defaultProps = {
    href: '',
    style: {},
    handleClick: () => {}
};

PinkUnderLine.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    style: PropTypes.object
};

export default PinkUnderLine;
