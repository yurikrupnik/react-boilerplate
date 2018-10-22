import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.css';
import routes from '../routes';

const SideBar = () => (
    <div className={styles.navContainer}>
        <div className={styles.link}>
            <NavLink
                to="/guarantee/customer-service"
                activeClassName={styles.selected}
            >
                24/7 Customer Service
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/lifetime_warranty"
                activeClassName={styles.selected}
            >
                Lifetime Warranty
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/free_shipping"
                activeClassName={styles.selected}
            >
                Free Shipping Worldwide
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/hassle_free_returns"
                activeClassName={styles.selected}
            >
                Hassle-Free Returns
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/free_engraving"
                activeClassName={styles.selected}
            >
                Free Engraving
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/free_resizings"
                activeClassName={styles.selected}
            >
                60-Day Free Resizing
            </NavLink>
        </div>

        <div className={styles.link}>
            <NavLink
                to="/guarantee/lifetime_upgrade"
                activeClassName={styles.selected}
            >
                Lifetime Upgrade
            </NavLink>
        </div>
    </div>
);

SideBar.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({
    //     key: PropTypes.string.isRequired,
    //     path: PropTypes.string.isRequired
    // })).isRequired
};

export default SideBar;
