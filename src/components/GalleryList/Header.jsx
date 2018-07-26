import React from 'react';
import styles from './Header.css';

const GalleryHeader = () => {
    return (
        <div className={styles['flex-container']}>
            <div className={styles['flex-item']}>
                Actual Photo
            </div>
            <div className={styles['flex-item']}>
                Shape
            </div>
            <div className={styles['flex-item']}>
                Carat
            </div>
            <div className={styles['flex-item']}>
                Color
            </div>
            <div className={styles['flex-item']}>
                Clarity
            </div>
            <div className={styles['flex-item']}>
                Cut
            </div>
            <div className={styles['flex-item']}>
                Depth
            </div>
            <div className={styles['flex-item']}>
                Table
            </div>
            <div className={styles['flex-item']}>
                Lab
            </div>
            <div className={styles['flex-item']}>
                Origin
            </div>
            <div className={styles['flex-item']}>
                Price
            </div>
            <div className={styles['flex-item']}>
                Compare
            </div>
            <div className={styles['flex-item']}>
                Wishlist
            </div>
            <div className={styles['flex-item']}>
            </div>
        </div>
    );
};

export default GalleryHeader;
