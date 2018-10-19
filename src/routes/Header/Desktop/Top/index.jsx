import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Top = ({ routes }) => (
    <div className={`row center-xs middle-xs ${styles.container}`}>
        {routes.map(route => (
            <div key={route.path}>
                <Link
                    className={`${styles.item} col-xs`}
                    to={route.path}
                >
                    {route.label}
                </Link>
            </div>
        ))}
    </div>
);

Top.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Top;
