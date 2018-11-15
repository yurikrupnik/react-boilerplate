import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

export default ({ data }) => (
    <div className={styles.root}>
        <Link to="/topics">
            <img
                className={styles.imgBanner}
                src={data.src}
                alt={data.alt}
                title={data.title}
            />
            <div className={styles.textContainer}>
                <div className={styles.topHeader}>
                    ENGAGEMENT RINGS
                </div>
                <img
                    src="https://ion.r2net.com/images/Campaigns/casa-pagina/WrappedInPink//HPBannerText.png?v=2"
                />
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        DESIGN YOUR RING
                    </div>
                </div>
            </div>
        </Link>
    </div>
);
