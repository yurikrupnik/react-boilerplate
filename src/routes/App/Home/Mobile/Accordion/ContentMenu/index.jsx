/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ContentMenu = ({ data }) => (
    <div>
        {data.map((item) => {
            const {
                title, subTitle, maxItemsPerCol, maxSizeItem, list
            } = item;
            return (
                <div className={styles.contentMenuContainer} key={title}>
                    {title
                    && (
                        <div className={styles.headerContainer}>
                            <div className={styles.listHeader}>
                                {title}
                            </div>
                            {subTitle
                                && (
                                    <div className={`${styles.listHeader} ${styles.subListHeader}`}>
                                        {subTitle}
                                    </div>
                                )}
                        </div>
                    )}
                    <div
                        style={{ height: `${maxItemsPerCol * maxSizeItem}px` }}
                        className={styles.mainListContainer}
                    >
                        {list.map((listItem, index) => {
                            const {
                                text, to, iconName, iconColor, classImg
                            } = listItem;
                            return (
                                <div className={styles.listItem} key={index}>
                                    <a href={to}>
                                        {iconName
                                            ? (
                                                <div
                                                    className={`${styles.icon} ${styles[iconName]}`}
                                                    style={{ color: `${iconColor || ''}` }}
                                                />
                                            )
                                            : (
                                                <div className={`${styles[classImg]} ${styles[text]}`} />
                                            )
                                        }
                                        {classImg === 'imgLogo' ? '' : text}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>);
        })}
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
