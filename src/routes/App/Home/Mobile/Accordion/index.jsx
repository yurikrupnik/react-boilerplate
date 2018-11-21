import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import styles from './styles.scss';
import { accordionData } from '../../data';
import ContentMenu from './ContentMenu';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedIndex: -1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index) {
        const { expandedIndex } = this.state;
        let newIndex = index;
        if (index === expandedIndex) {
            newIndex = -1;
        }
        this.setState({
            expandedIndex: newIndex
        });
    }

    render() {
        const { expandedIndex } = this.state;
        const { handleChange } = this;

        return (
            <div className={styles.root}>
                {accordionData.map((item, index) => {
                    const {
                        bottomBanner, content, iconClass, title
                    } = item;
                    return (
                        <ExpansionPanel
                            key={item.title}
                            expanded={expandedIndex === index}
                            onChange={() => handleChange(index)}
                        >
                            <ExpansionPanelSummary
                                expandIcon={<span className={styles.expandIcon} />}
                            >
                                <div className={styles.headerContainer}>
                                    <span
                                        className={`${styles.iconHeader} ${styles[iconClass]}`}
                                    />
                                    <div className={`${styles.headerText} ${expandedIndex === index ? styles.expanded : null}`}>
                                        {title}
                                    </div>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className={styles.panelDetails}>
                                    <div className={styles.mainPanel}>
                                        <ContentMenu data={content} />
                                    </div>
                                    <div className={styles.bottomBannerContainer}>
                                        <a href={bottomBanner.to}>
                                            <img
                                                className={styles.imgBanner}
                                                src={bottomBanner.src}
                                                alt={bottomBanner.alt}
                                            />
                                            <span
                                                className={`${styles.textBanner} ${styles[bottomBanner.directionText]}`}
                                            >
                                                {bottomBanner.text}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );
                })}
            </div>
        );
    }
}
