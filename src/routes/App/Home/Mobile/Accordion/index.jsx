import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import styles from './styles.scss';
import { accordionData } from '../../data';
import ContentMenu from './ContentMenu';

const Accordion = () => (
    <div className={styles.root}>
        {accordionData.map(item => (
            <ExpansionPanel style={{ backgroundColor: '#eee' }} key={item.title}>
                <ExpansionPanelSummary
                    expandIcon={<span className={styles.expandIcon} />}
                >
                    <div className={styles.headerContainer}>
                        <span className={`${styles.iconHeader} ${styles[item.iconClass]}`} />
                        <div className={styles.headerText}>
                            {item.title}
                        </div>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={styles.panelDetails}>
                        <div className={styles.mainPanel}>
                            <ContentMenu data={item.content} />
                        </div>
                        <div className={styles.bottomBannerContainer}>
                            <a href={item.bottomBanner.to}>
                                <img
                                    className={styles.imgBanner}
                                    src={item.bottomBanner.src}
                                    alt={item.bottomBanner.alt}
                                />
                                <span
                                    className={`${styles.textBanner} ${styles[item.bottomBanner.directionText]}`}
                                >
                                    {item.bottomBanner.text}
                                </span>
                            </a>
                        </div>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        ))}
    </div>
);

export default Accordion;
