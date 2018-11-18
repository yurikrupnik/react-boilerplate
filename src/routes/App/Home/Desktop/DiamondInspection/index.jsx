import React, { Component } from 'react';
import styles from './styles.scss';
import UnderLinePink from '../UnderLinePink';

export default class DiamondInspection extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        global.window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { bottomSection, sparkleBg } = this.refs;

        const pageYOffset = global.window.pageYOffset > 0 ? global.window.pageYOffset : 0;
        if (pageYOffset > 0 && !this.scrollStarted) {
            this.scrollStarted = true;
        }

        if (bottomSection) {
            const { bottom } = bottomSection.getBoundingClientRect();
            if (bottom > -600 && bottom < screen.height + 1000) {
                bottomSection.style.backgroundPosition = `right 70px top 100px, 0 ${0 + (bottom / 20).toFixed()}px`;
            }
        }


        if (sparkleBg) {
            const bsTop = sparkleBg.getBoundingClientRect().top;
            const top = 200 + ((bsTop - 383) * 0.06);
            // if (bs && bsTop > 383) {
            sparkleBg.style.top = `${top}px`;
            // }
        }
    }

    render() {
        return (
            <div
                className={styles['bottom-section']}
                ref="bottomSection"
            >
                <div className={styles['bottom-left-bg-container']}>
                    <div
                        ref="sparkleBg"
                        className={styles['sparkle-bg']}
                    />
                    <div className={styles['bottom-left-bg']} />
                </div>
                <div className={styles.wideContent} data-gtm-name="diamond inspection">
                    <div className={styles['table-align']}>
                        <div style={{ width: '50%' }} />
                        <div className={styles['diamond-inspection-container']}>
                            <div className={styles['diamond-inspection']}>
                                <div className={styles['title-pack']}>
                                    <div>REAL-TIME INTERACTIVE</div>
                                    <div>DIAMOND INSPECTION</div>
                                    <div className={styles['sub-title']}>
                                        Take a closer look at your favorite diamonds using our
                                        Real-Time Diamond Inspection service; a one-on-one
                                        consultation with a non-commissioned certified
                                        gemologist. Share your
                                        screen and get expert guidance as you
                                        {' '}
                                        <b>explore diamonds in 360° HD</b>
                                        {' '}
                                        with up to 40x magnification.
                                        Mark points of interest on the screen while chatting
                                        with your diamond expert in
                                        real time, and review everything from the specs to the
                                        grading certificate together.
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: '17px',
                                    fontFamily: 'NunitoSans',
                                    color: 'rgb(27, 27,F 27)'
                                }}
                                >
                                    <UnderLinePink href="/topics/" style={{ fontSize: '17px' }}>
                                        START YOUR DIAMOND INSPECTION NOW
                                    </UnderLinePink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
