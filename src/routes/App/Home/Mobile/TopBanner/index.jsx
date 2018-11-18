import React from 'react';
import styles from './styles.scss';

const TopBanner = () => (
    <div className={styles.root}>
        <a href="/topics/">
            <img
                className={styles.backgroundBanner}
                src="https://ion.r2net.com/images/Campaigns/casa-pagina/WrappedInPink/Mobilevertical.jpg?v=6"
                alt=""
            />
            <div className={styles.textContainer}>
                <h1>
                    Engagement Rings
                </h1>
                <img
                    src="https://ion.r2net.com/images/Campaigns/casa-pagina/WrappedInPink/HPBannerTextMobile.png?ver=7"
                    alt=""
                />
                <div>
                    DESIGN YOUR RING
                </div>
            </div>
        </a>

    </div>
);

export default TopBanner;
