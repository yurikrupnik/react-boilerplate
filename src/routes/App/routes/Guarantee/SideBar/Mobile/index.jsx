import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollableTabsButtonPrevent from './ScrollableTabsButtonPrevent';
import styles from './styles.scss';

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


const SideBar = () => (
    <div>
        <div className={styles.imgContainer}>
            <div className={styles.img}>
                    IMG here!
            </div>
        </div>
        <ScrollableTabsButtonPrevent />
        {/* <div className={styles.navContainer}> */}
        {/* {linksSideBar.map(link => ( */}
        {/* <NavLink */}
        {/* to={link.to} */}
        {/* activeClassName={styles.selected} */}
        {/* > */}
        {/* {link.label} */}
        {/* </NavLink> */}
        {/* ))} */}
        {/* </div> */}
    </div>
);

export default SideBar;
