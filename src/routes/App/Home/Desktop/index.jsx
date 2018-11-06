/* eslint-disable react/no-string-refs */
import React from 'react';
import styles from './styles.scss';
import TopBanner from './TopBanner';
import JustifyAlign from './JustifyAlign/index.jsx';

const imgsData = [
    {
        text: 'designer \n collections',
        to: '/engagement-rings/unique/',
        imgSrc: 'https://ion.r2net.com/images/amazingHomepage/Eternity.jpg?v=11'
    },
    {
        text: 'wedding & \n anniversary',
        to: '/wedding-rings/',
        imgSrc: 'https://ion.r2net.com/images/amazingHomepage/Wedding_Anniversary.jpg'
    },
    {
        text: 'fine \n jewelry',
        to: '/fine-jewelry/',
        imgSrc: 'https://ion.r2net.com/images/amazingHomepage/box-c.jpg?v=4'
    }
];

const iconsData = [
    'FeaturedIn', 'Forbes', 'BuzzFeed', 'EliteDaily', 'LaurenConrad', 'Maxim', 'Refinery29', 'Popsugar', 'UsWeekly', 'TheKnot'
];


class Desktop extends React.Component {
    constructor(props) {
        super(props);
        // this.videoName = props.test ? 'hp_dog_prod' : 'hp_prod2';
        // this.state = {
        //     videoSrc: undefined
        // };
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     videoSrc: `https://ion.r2net.com/images/amazingHomepage/${this.videoName}.mp4`
        // })
        // this.isTouch = !~document.body.className.indexOf('Notouch');
        // this.refs.bestSellersHeader.innerText = this.bestSellersGallery[0].name;
        // this.refs.bestSellersSub.innerText = this.bestSellersGallery[0].sub;
        // this.refs.looseDiamondsHeader.innerText = this.looseDiamondsGallery[0].name;
        // this.refs.looseDiamondsSub.innerText = this.looseDiamondsGallery[0].sub;
        global.window.addEventListener('scroll', this.handleScroll);
        // this.makeSmooth();
    }

    componentWillUnmount() {
        // $(window).off('mousewheel DOMMouseScroll');
        global.window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const {
            bottomSection, dyuBg, designYouOwn, sparkleBg, stoneText, stoneSprite
        } = this.refs;

        const pageYOffset = global.window.pageYOffset > 0 ? global.window.pageYOffset : 0;

        if (pageYOffset > 0 && !this.scrollStarted) {
            this.scrollStarted = true;
            this.refs.newhomepage.className += ` ${styles['scroll-started']}`;
        }
        if (this.refs.parallax1) {
            const arr = [this.refs.parallax1, this.refs.parallax2,
                this.refs.parallax3, this.refs.parallax4];
            const pinks = [{
                pink: 1,
                el: this.refs.pink1
            }, {
                pink: 2,
                el: this.refs.pink2
            }, {
                pink: 3,
                el: this.refs.pink3
            }, {
                pink: 4,
                el: this.refs.pink4
            }];

            const bottom = this.refs.parallax1.getBoundingClientRect().bottom;
            if (bottom > -1600 && bottom < screen.height + 1000) {
                arr.forEach((el) => {
                    el.style.bottom = `${(bottom / 8).toFixed()}px`;
                });
                const bgSpeed = 20;
                pinks.forEach((d) => {
                    d.el.style.bottom = `${(bottom / 7).toFixed()}px`;
                    const speedDelta = bottom / bgSpeed;
                    d.el.style.backgroundPositionY = d.pink == 1 ? `${(speedDelta - 100).toFixed()}px`
                        : d.pink === 2 ? `${(speedDelta).toFixed()}px`
                            : d.pink === 3 ? `${(speedDelta - 40).toFixed()}px`
                                : d.pink === 4 ? `${speedDelta.toFixed()}px`
                                    : `${(speedDelta - 100).toFixed()}px`;
                });
            }
        }

        if (bottomSection) {
            const bottom = bottomSection.getBoundingClientRect().bottom;
            if (bottom > -600 && bottom < screen.height + 1000) {
                bottomSection.style.backgroundPosition = `right 70px top 100px, 0 ${0 + (bottom / 20).toFixed()}px`;
            }
        }

        if (dyuBg) {
            const bottom = dyuBg.getBoundingClientRect().bottom;
            if (bottom > -600 && bottom < screen.height + 1000) {
                dyuBg.style.transform = `translate(-50%, ${(bottom / 23 - 10).toFixed()}px)`;
            }
        }

        if (designYouOwn) {
            designYouOwn.style.top = `${pageYOffset * 0.1}px`;
        }

        if (sparkleBg) {
            const bsTop = sparkleBg.getBoundingClientRect().top;
            // if (bs && bsTop > 383) {
            sparkleBg.style.top = `${200 + ((bsTop - 383) * 0.06)}px`;
            // }
        }

        const progSpeed = global.window.innerWidth <= 1460 ? 0.56 : global.window.innerWidth <= 1280 ? 0.6 : 0.36;
        let isInPlace = false;
        if (stoneSprite) {
            const sy = pageYOffset * progSpeed;
            let top = -24 + sy;
            isInPlace = top >= 192;// && parseInt(stoneSprite.style.top) == 192;
            top > 192 && (top = 192);

            if (!isInPlace) {
                stoneSprite.style.top = `${top}px`;
                const floor = Math.floor(sy / 11);
                const pos = floor * 292;
                if (floor < 20) {
                    stoneSprite.style.backgroundPosition = `left top ${-pos}px`;
                }
            } else {
                stoneSprite.style.top = '192px';
                stoneSprite.style.backgroundPosition = 'left top -5548px';
            }
        }
        if (stoneText) {
            let top = pageYOffset * 0.3;
            top > 215 && (top = 215);
            if (!isInPlace && top <= 215) {
                stoneText.style.top = `${top}px`;
            }
        }
    }

    // makeSmooth() {
    //     const $window = $(window);
    //     const scrollTime = 1.2;
    //     const scrollDistance = 230;
    //     $window.on('mousewheel DOMMouseScroll', (event) => {
    //         event.preventDefault();
    //         const delta = event.originalEvent.wheelDelta / 120 ||
    //                            -event.originalEvent.detail / 3;
    //         const scrollTop = $window.scrollTop();
    //         const finalScroll = scrollTop - parseInt(delta * scrollDistance);
    //
    //         TweenLite.to($window, scrollTime, {
    //             scrollTo: { y: finalScroll, autoKill: true },
    //             ease: Expo.easeOut,
    //             overwrite: 5
    //         });
    //     });
    // }

    render() {
        return (
            <div>
                <TopBanner/>

                <div
                    className="wideContent"
                    style={{
                        position: 'relative',
                        marginBottom: '105px'
                    }}
                >
                    <JustifyAlign
                        className={styles['start-align']}
                        data-styled={{
                            fontSize: 0,
                            height: '860px'
                        }}
                    >
                        <div style={{ position: 'relative', height: '451px' }} data-gtm-name="design your own">
                            <div ref="stoneText" className={styles['start-with-container']}>
                                <div className={styles['title-pack']}>
                                    <div>
                                        <span>
                                             design your own
                                        </span>
                                        <span>
                                            engagement ring
                                        </span>
                                    </div>
                                    <div className={styles['sub-title']}>
                                        Design your engagement ring your way.
                                        Start with a ring setting and then add the perfect center
                                        stone - or vice versa.
                                        <br/>
                                        It’s really up to you!
                                    </div>
                                </div>
                                <JustifyAlign className={styles['start-button-container']}>
                                    <div
                                        className={styles['start-button']}
                                        style={{ verticalAlign: 'middle' }}
                                    >
                                        <a
                                            style={{
                                                padding: '12px 27px',
                                                fontFamily: 'NunitoSans'
                                            }}
                                            href="/engagement-rings/all-settings/"
                                            data-container="#WidePane"
                                        >
                                            start with a setting
                                        </a>
                                    </div>
                                    <div style={{
                                        verticalAlign: 'middle',
                                        fontFamily: 'NunitoSans'
                                    }}
                                    >
                                        or
                                    </div>
                                    <div
                                        className={styles['start-button']}
                                        style={{ verticalAlign: 'middle' }}
                                    >
                                        <a
                                            style={{
                                                padding: '12px 21px',
                                                fontFamily: 'NunitoSans'
                                            }}
                                            href="/loose-diamonds/all-diamonds/"
                                            data-container="#WidePane"
                                        >
                                            start with a diamond
                                        </a>

                                    </div>
                                </JustifyAlign>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <span style={{ fontFamily: 'NunitoSans' }}>
                                        Spark your imagination with these
                                    </span>
                                    <a
                                        style={{
                                            color: '#ff8081',
                                            textDecoration: 'underline',
                                            fontFamily: 'NunitoSans'
                                        }}
                                        href="/diamond-rings/diamond-engagement-rings/"
                                        data-container="#WidePane"
                                    >
                                        recently purchased engagement rings.
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles['right-t1']}>
                            <span className={styles['right-vav']}>
                                <div className={styles['ring-container']}>
                                    <img
                                        style={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            right: '0',
                                            top: '174px'
                                        }}
                                        src="https://ion.r2net.com/images/amazingHomepage/ring.png?v=2"
                                        alt="James Allen 14K white gold diamond engagement ring"
                                    />

                                    <div
                                        ref="stoneSprite"
                                        className={styles.stoneSprite}
                                        style={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            right: '426px',
                                            top: '-24px'
                                        }}
                                    />

                                    <img
                                        ref="prong"
                                        style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: '338px',
                                            right: '470px'
                                        }}
                                        src="https://ion.r2net.com/images/amazingHomepage/Prong.png?v=2"
                                        alt=""
                                    />
                                    <img
                                        src="https://ion.r2net.com/images/amazingHomepage/dyu-bg.png?v=6"
                                        alt=""
                                        className={styles['dyu-bg']}
                                        ref="dyuBg"
                                    />
                                </div>
                            </span>
                        </div>
                    </JustifyAlign>
                    <a
                        href="/about-us-press/"
                        data-container="#WidePane"
                        style={{
                            display: 'block',
                            position: 'relative',
                            bottom: '29px'
                        }}
                    >
                        <div className={styles['featured-bar']}>
                            {iconsData.map(name => (
                                <div>
                                    <img
                                        alt={`featured in ${name}`}
                                        title={`featured in ${name}`}
                                        src={`https://ion.r2net.com/images/amazingHomepage/FeaturedBar/Grey/${name}_Grey.svg`}
                                    />
                                </div>
                            ))}
                        </div>
                    </a>
                    <JustifyAlign
                        className={styles['events-align']}
                        data-styled={{
                            position: 'relative',
                            zIndex: 3,
                            fontFamily: 'NunitoSans'
                        }}
                        data-gtm-name="large image splash"
                    >
                        {imgsData.map(item => (
                            <div key={item.key}>
                                <div className={styles['abs-scale']}>
                                    <div className={styles.abs}>
                                        <div className={styles.line}/>
                                        <div className={styles['line-text']}>
                                            {item.text}
                                        </div>
                                    </div>
                                    <div className={styles['abs-img-box']}>
                                        <a href={item.to} data-container="#WidePane">
                                            <img
                                                src={item.imgSrc}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </JustifyAlign>
                </div>
            </div>
        );
    }
}

export default Desktop;
