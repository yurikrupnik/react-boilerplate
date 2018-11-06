/* eslint-disable linebreak-style */
import React from 'react';
import styles from './styles.scss';
import HeaderMobile from '../../HeaderMobile';
import data from '../data';

const CustomerService = () => (
    <div className={styles.rootContainer}>
        <HeaderMobile text={data.header} />
        <p>
            {data.text}
        </p>
        <div className={styles.servicesContainer}>
            <a className={styles.serviceItem}>
                <div className={styles.imgService}>
                    <h3>
                        LOGO
                    </h3>
                </div>
                Call
            </a>
            <a className={styles.serviceItem}>
                <div className={styles.imgService}>
                    <h3>
                        LOGO
                    </h3>
                </div>
                Skype
            </a>
            <a className={styles.serviceItem}>
                <div className={styles.imgService}>
                    <h3>
                        LOGO
                    </h3>
                </div>
                Chat
            </a>
            <a className={styles.serviceItem}>
                <div className={styles.imgService}>
                    <h3>
                        LOGO
                    </h3>
                </div>
                Email
            </a>
        </div>

    </div>
);

export default CustomerService;
