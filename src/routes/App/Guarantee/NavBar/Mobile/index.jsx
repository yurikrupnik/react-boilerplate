import React from 'react';
import { NavLink } from 'react-router-dom';
import linksData from '../linksData';
import styles from './styles.scss';

const NavBar = () => (
    <div>
        <div className={styles.imgContainer}>
            <img
                className={styles.img}
                src="https://ion.r2net.com/images/mobiletest/riskfree/risk-free-header.png"
                alt=""
            />
        </div>
        <div className={styles.navContainer}>
            {linksData.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    activeClassName={styles.selected}
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    </div>
);

export default NavBar;
