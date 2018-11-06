import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';
import linksSideBar from '../linksData';

const NavBar = () => (linksSideBar.map(link => (
    <div className={styles.navContainer} key={link.to}>
        <div className={styles.link}>
            <NavLink
                to={link.to}
                activeClassName={styles.selected}
            >
                {link.label}
            </NavLink>
        </div>
    </div>
)));

export default NavBar;
