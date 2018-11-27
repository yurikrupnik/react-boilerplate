import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ZoomImgs = ({ data }) => (
    <div className={styles.root}>
        {data.map(item => (
            <div className={styles.item} key={item.to}>
                <div className={styles.abs}>
                    <div className={styles['line-text']}>
                        {item.text}
                    </div>
                </div>
                <div className={styles['abs-img-box']}>
                    <a href={item.to} data-container="#WidePane">
                        <img src={item.imgSrc} alt="" />
                    </a>
                </div>
            </div>
        ))}
    </div>
);

ZoomImgs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string,
        imgSrc: PropTypes.string,
    })).isRequired
};

export default ZoomImgs;
