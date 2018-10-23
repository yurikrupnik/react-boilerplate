import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';

const linksSideBar = [
    {
        to: '/guarantee/customer-service',
        label: '24/7 Customer Service'
    },
    {
        to: '/guarantee/lifetime-warranty',
        label: 'Lifetime Warranty'
    },
    {
        to: '/guarantee/free-shipping',
        label: 'Free Shipping Worldwide'
    },
    {
        to: '/guarantee/hassle-free-returns',
        label: 'Hassle-Free Returns'
    },
    {
        to: '/guarantee/free-engraving',
        label: 'Free Engraving'
    },
    {
        to: '/guarantee/free-resizings',
        label: '60-Day Free Resizing'
    },
    {
        to: '/guarantee/lifetime-upgrade',
        label: 'Lifetime Upgrade'
    }
];

const SideBar = () => {
    return (linksSideBar.map(link => (
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
};

export default SideBar;
