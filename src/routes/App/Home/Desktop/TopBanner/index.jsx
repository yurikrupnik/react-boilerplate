import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

export default () => (
    <div className={styles.root}>
        <Link to="/topics">
            <img
                className={styles.imgBanner}
                src="https://ion.r2net.com/images/Campaigns/casa-pagina/WrappedInPink//HPBanner.jpg?v=5"
                alt="A woman wearing an engagement ring and diamond bracelets, embracing her fiancé in a scarf."
                title="A woman wearing an engagement ring and diamond bracelets, embracing her fiancé in a scarf."
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
