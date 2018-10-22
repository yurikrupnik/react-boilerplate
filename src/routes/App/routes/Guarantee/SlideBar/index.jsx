import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.css';
import routes from '../routes';

const Index = () => (
    <div className={styles.navContainer}>
        <div className={styles.link}>
            <NavLink
                to="/guarantee/customer-service/"
                activeClassName={styles.selected}
            >
                24/7 Customer Service
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/lifetime-warranty/"
                activeClassName={styles.selected}
            >
                Lifetime Warranty
            </NavLink>
        </div>
    </div>
);

Index.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({
    //     key: PropTypes.string.isRequired,
    //     path: PropTypes.string.isRequired
    // })).isRequired
};

export default Index;
