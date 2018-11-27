import React, { Component } from 'react';
import styles from './styles.scss';
import { imgsData } from '../../data';

export default class ZoomImgs extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className={styles.root}>
                {data.map(item => (
                    <div key={item.to}>
                        <div className={styles['abs-scale']}>
                            <div className={styles.abs}>
                                <div className={styles.line} />
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
                    </div>
                ))}
            </div>
        );
    }
}
