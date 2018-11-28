/* eslint-disable linebreak-style */
import React from 'react';
import styles from './styles.scss';
import HeaderMobile from '../../HeaderMobile';
import data from '../data';

const CustomerService = () => {
    const { header, text, items } = data;
    return (
        <div className={styles.root}>
            <HeaderMobile text={header} />
            <p>
                {text}
            </p>
            <div className={styles.servicesContainer}>
                {items.filter(arrItem => (arrItem.mobileLabel !== ''))
                    .map((item) => {
                        const { icon, mobileLabel, path } = item;
                        return (
                            <a
                                key={icon}
                                className={styles.serviceItem}
                                href={path}
                            >
                                <span className={`${styles.icon} ${styles[icon]}`} />
                                {mobileLabel}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default CustomerService;
