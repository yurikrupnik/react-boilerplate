import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ContentMenu = ({ data }) => (
    <div>
        {data.map(item => (
            <div className={styles.root} key={item.title}>
                {item.title
                    ? (
                        <div className={styles.listHeader}>
                            {item.title}
                        </div>
                    )
                    : null
                }
                <div
                    style={{ height: `${item.maxItemsPerCol * item.maxSizeItem}px` }}
                    className={styles.listContainer}
                >
                    {item.list.map(listItem => (
                        <div className={styles.listItem} key={listItem.text}>
                            <a
                                key={listItem.text}
                                href={listItem.to}
                            >
                                {listItem.iconName
                                    ? (
                                        <div
                                            className={`${styles.icon} ${styles[listItem.iconName]}`}
                                            style={{ color: `${listItem.iconColor ? listItem.iconColor : ''}` }}
                                        />
                                    )
                                    : (
                                        <div
                                            className={`${styles[listItem.classImg]} ${styles[listItem.text]}`}
                                        />
                                    )
                                }
                                {listItem.classImg === 'imgLogo' ? '' : listItem.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

ContentMenu.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.object),
        iconClass: PropTypes.string,
        bottomBanner: PropTypes.objectOf(PropTypes.string)
    })).isRequired,
};

export default ContentMenu;
