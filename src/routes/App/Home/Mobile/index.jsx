import React from 'react';
import styles from './styles.scss';
import TopBanner from './TopBanner';
import data from '../data';
import Accordion from './Accordion';

export default () => (
    <div className={styles.root}>
        <div className={styles.test}>
            <TopBanner data={data.bannerData} />
            <Accordion />
        </div>
    </div>
);
