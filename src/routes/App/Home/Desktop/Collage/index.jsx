import React from 'react';
import styles from './styles.scss';
import { collageData } from '../../data';
import Image from './Image';

const Collage = () => (
    <div className={styles.moments}>
        {collageData.filter(arrItem => (arrItem.type === 1)).map(item => (
            <Image data={item} key={item.href} />
        ))}

        <div className={styles['collage-middle']}>
            {collageData.filter(arrItem => (arrItem.type === 2)).map(item => (
                <Image data={item} key={item.href} />
            ))}
        </div>
        <div className={styles['collage-middle']}>
            {collageData.filter(arrItem => (arrItem.type === 3)).map(item => (
                <Image data={item} key={item.href} />
            ))}
        </div>

        <div className={styles['collage-double']}>
            {collageData.filter(arrItem => (arrItem.type === 4)).map(item => (
                <Image data={item} key={item.href} />
            ))}
        </div>
    </div>
);

export default Collage;
