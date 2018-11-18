import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/core/Icon';
import styles from './styles.scss';

const Accordion = () => (
    <div className={styles.root}>
        <ExpansionPanel style={{ backgroundColor: '#dedede' }}>
            <ExpansionPanelSummary
                expandIcon={<span className={styles.expandIcon} />}
                style={{
                    backgroundColor: 'white',
                    height: '50px'
                }}
            >
                <div className={styles.headerContainer}>
                    <span className={`${styles.iconHeader} ${styles.engagementRings}`} />
                    <div className={styles.headerText}>
                        Engagement rings
                    </div>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                style={{
                    padding: 0,
                    margin: 0
                }}
            >
                <div className={styles.panelDetails}>
                    <div className={styles.mainPanel}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </div>
                    <div className={styles.bottomBannerContainer}>
                        <a href="/topics/">
                            <img
                                className={styles.imgBanner}
                                src="https://ion.r2net.com/Images/MobileTest/SplashPages/EngagementSplash/menu-link-bg.jpg"
                                alt=""
                            />
                            <span className={styles.textBanner}>
                                design your own engagement ring >
                            </span>
                        </a>
                    </div>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled style={{ backgroundColor: '#dedede' }}>
            <ExpansionPanelSummary
                expandIcon={<span className={styles.expandIcon} />}
                style={{
                    backgroundColor: 'white',
                    height: '50px'
                }}
            >
                <div className={styles.headerContainer}>
                    <span className={`${styles.iconHeader} ${styles.diamonds}`} />
                    <div className={styles.headerText}>
                        Diamonds
                    </div>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={styles.panelDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{ backgroundColor: '#dedede' }}>
            <ExpansionPanelSummary
                expandIcon={<span className={styles.expandIcon} />}
                style={{
                    backgroundColor: 'white',
                    height: '50px'
                }}
            >
                <div className={styles.headerContainer}>
                    <span className={`${styles.iconHeader} ${styles.gemstones}`} />
                    <div className={styles.headerText}>
                        Gemstones
                    </div>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={styles.panelDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{ backgroundColor: '#dedede' }}>
            <ExpansionPanelSummary
                expandIcon={<span className={styles.expandIcon} />}
                style={{
                    backgroundColor: 'white',
                    height: '50px'
                }}
            >
                <div className={styles.headerContainer}>
                    <span className={`${styles.iconHeader} ${styles.weddingRings}`} />
                    <div className={styles.headerText}>
                        Wedding Rings
                    </div>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={styles.panelDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{ backgroundColor: '#dedede' }}>
            <ExpansionPanelSummary
                expandIcon={<span className={styles.expandIcon} />}
                style={{
                    backgroundColor: 'white',
                    height: '50px'
                }}
            >
                <div className={styles.headerContainer}>
                    <span className={`${styles.iconHeader} ${styles.fineJewelry}`} />
                    <div className={styles.headerText}>
                        Fine Jewelry
                    </div>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={styles.panelDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

// SimpleExpansionPanel.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default Accordion;
