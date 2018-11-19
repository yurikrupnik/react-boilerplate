import React from 'react';
import styles from './styles.scss';

const ContentMenu = ({ data }) => (
    <div>
        {data.map(item => (
            <div>
                <div key={item.title}>
                    {item.title}
                </div>
                {item.list.map(listItem => (
                    <div>
                        <div>
                            <span aria-hidden="true" className={styles.icon} data-icon="\E65A;" />
                            {listItem.text}
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default ContentMenu;
