/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import styles from './styles.scss';

class NavTop extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.navContainer}>
                    <div className={styles.itemContainer}>
                        <a href="/topics/">
                            <img alt="" src="https://ion.r2net.com/Images/logo.svg" />
                        </a>
                    </div>
                    <div className={`${styles.itemContainer} ${styles.hoverItem}`}>
                        engagement rings
                    </div>
                    <div className={`${styles.itemContainer} ${styles.hoverItem}`}>
                        wedding rings
                    </div>
                    <div className={`${styles.itemContainer} ${styles.hoverItem}`}>
                        diamonds
                    </div>
                    <div className={`${styles.itemContainer} ${styles.hoverItem}`}>
                        gemstones
                    </div>
                    <div className={`${styles.itemContainer} ${styles.hoverItem}`}>
                        fine jewelry
                    </div>
                    |
                    <div className={styles.itemContainer}>
                        education
                    </div>
                    <div className={styles.itemContainer}>
                        faq
                    </div>
                </div>
            </div>
        );
    }
}

export default NavTop;
