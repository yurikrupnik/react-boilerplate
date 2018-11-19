import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';
import { bannerData, bottomNavLink } from '../data';
import TopBanner from './TopBanner';
import Accordion from './Accordion';

export default () => (
    <div className={styles.root}>
        <TopBanner data={bannerData} />
        <Accordion />
        <div className={styles.navContainer}>
            {bottomNavLink.map(item => (
                <NavLink to={item.to} className={styles.linkContainer} key={item.label}>
                    <span className={`${styles.icon} ${styles[item.iconClass]}`} />
                    <div className={styles.label}>
                        {item.label}
                    </div>
                </NavLink>
            ))}
        </div>
    </div>
);
