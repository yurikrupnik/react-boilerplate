import React, { Component } from 'react';
import styles from './styles.scss';
import TopBanner from './TopBanner';
import Carousel from './Carousel';
import {
    bannerData, bestSellersGallery, looseDiamondsGallery, iconsData, imgsData
} from '../data';
import GradientButton from '../../../../components/Buttons/Gradient';
import UnderLinePink from './UnderLinePink';
import Collage from './Collage';
import DiamondInspection from './DiamondInspection';
import ZoomImgs from './ZoomImges';

export default class Desktop extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.stoneTextRef = React.createRef();
        this.bottomSectionRef = React.createRef();
        this.dyuBgRef = React.createRef();
        this.designYouOwnRef = React.createRef();
        this.sparkleBgRef = React.createRef();
        this.stoneSpritenRef = React.createRef();
        this.parallax1Ref = React.createRef();
        this.parallax2Ref = React.createRef();
        this.parallax3Ref = React.createRef();
        this.parallax4Ref = React.createRef();
        this.pink1Ref = React.createRef();
        this.pink2Ref = React.createRef();
        this.pink3Ref = React.createRef();
        this.pink4Ref = React.createRef();
    }

    componentDidMount() {
        // this.isTouch = !~document.body.className.indexOf('Notouch');
        global.window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const {
            bottomSectionRef, dyuBgRef, designYouOwnRef, sparkleBgRef, stoneTextRef,
            stoneSpritenRef, parallax1Ref, parallax2Ref, parallax3Ref, parallax4Ref, pink1Ref,
            pink2Ref, pink3Ref, pink4Ref
        } = this;

        const pageYOffset = global.window.pageYOffset > 0 ? global.window.pageYOffset : 0;
        if (pageYOffset > 0 && !this.scrollStarted) {
            this.scrollStarted = true;
        }
        if (parallax1Ref.current) {
            const arr = [parallax1Ref.current, parallax2Ref.current,
                parallax3Ref.current, parallax4Ref.current];
            const pinks = [{
                pink: 1,
                el: pink1Ref.current
            }, {
                pink: 2,
                el: pink2Ref.current
            },
            {
                pink: 3,
                el: pink3Ref.current
            }, {
                pink: 4,
                el: pink4Ref.current
            }];
            const { bottom } = parallax1Ref.current.getBoundingClientRect();
            if (bottom > -1600 && bottom < screen.height + 1000) {
                arr.forEach((el) => {
                    el.style.bottom = `${(bottom / 8).toFixed()}px`;
                });
                const bgSpeed = 20;
                pinks.forEach((d) => {
                    d.el.style.bottom = `${(bottom / 7).toFixed()}px`;
                    const speedDelta = bottom / bgSpeed;
                    d.el.style.backgroundPositionY = d.pink === 1 ? `${(speedDelta - 100).toFixed()}px`
                        : d.pink === 2 ? `${(speedDelta).toFixed()}px`
                            : d.pink === 3 ? `${(speedDelta - 40).toFixed()}px`
                                : d.pink === 4 ? `${speedDelta.toFixed()}px`
                                    : `${(speedDelta - 100).toFixed()}px`;
                });
            }
        }

        if (bottomSectionRef.current) {
            const { bottom } = bottomSectionRef.current.getBoundingClientRect();
            if (bottom > -600 && bottom < screen.height + 1000) {
                bottomSectionRef.current.style.backgroundPosition = `right 70px top 100px, 0 ${0 + (bottom / 20).toFixed()}px`;
            }
        }

        if (dyuBgRef.current) {
            const { bottom } = dyuBgRef.current.getBoundingClientRect();
            if (bottom > -600 && bottom < screen.height + 1000) {
                dyuBgRef.current.style.transform = `translate(-50%, ${(bottom / 23 - 10).toFixed()}px)`;
            }
        }

        if (designYouOwnRef.current) {
            const top = pageYOffset * 0.1;
            designYouOwnRef.current.style.top = `${top}px`;
        }

        if (sparkleBgRef.current) {
            const bsTop = sparkleBgRef.current.getBoundingClientRect().top;
            const top = 200 + ((bsTop - 383) * 0.06);
            // if (bs && bsTop > 383) {
            sparkleBgRef.current.style.top = `${top}px`;
            // }
        }

        const progSpeed = (global.window.innerWidth) <= 1460 ? 0.56
            : (global.window.innerWidth) <= 1280 ? 0.6 : 0.36;
        let isInPlace = false;
        if (stoneSpritenRef.current) {
            const sy = pageYOffset * progSpeed;
            let top = -24 + sy;
            isInPlace = top >= 192;
            top > 192 && (top = 192);

            if (!isInPlace) {
                stoneSpritenRef.current.style.top = `${top}px`;
                const floor = Math.floor(sy / 11);
                const pos = floor * 292;
                if (floor < 20) {
                    stoneSpritenRef.current.style.backgroundPosition = `left top ${-pos}px`;
                }
            } else {
                stoneSpritenRef.current.style.top = '192px';
                stoneSpritenRef.current.style.backgroundPosition = 'left top -5548px';
            }
        }

        if (stoneTextRef.current) {
            let top = pageYOffset * 0.3;
            top > 215 && (top = 215);
            if (!isInPlace && top <= 215) {
                stoneTextRef.current.style.top = `${top}px`;
            }
        }
    }

    render() {
        return (
            <div>
                <TopBanner data={bannerData} />
                <div style={{ position: 'relative' }}>
                    <div
                        ref={this.designYouOwnRef}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            paddingTop: '0px'
                        }}
                    >
                        <div className={`${styles['top-brown-text']} ${styles['design-own']} }`}>
                            <div>
                                design your own
                            </div>
                        </div>
                        <div className={styles['top-brown']}>
                            <div
                                className={styles.wideContent}
                                style={{
                                    position: 'relative',
                                    height: '240px'
                                }}
                            >
                                <div
                                    className={styles['separator-container']}
                                    style={{
                                        margin: '0 auto',
                                        position: 'absolute',
                                        bottom: '-29px'
                                    }}
                                >
                                    <div
                                        className={styles.separator}
                                        style={{ backgroundColor: '#fff' }}
                                    />
                                    <div
                                        className={styles.separator}
                                        style={{ backgroundColor: '#f9f3ec' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.wideContent}
                    style={{
                        position: 'relative',
                        marginBottom: '105px'
                    }}
                >
                    <div className={styles['start-align']}>
                        <div style={{ position: 'relative', height: '451px' }}>
                            <div ref={this.stoneTextRef} className={styles['start-with-container']}>
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
                                        <br />
                                        It’s really up to you!
                                    </div>
                                </div>
                                <div className={styles['start-button-container']}>
                                    <GradientButton href="/topics/">
                                        start with a setting
                                    </GradientButton>
                                    <span className={styles.middleStartButtons}>
                                        OR
                                    </span>
                                    <GradientButton href="/topics/">
                                        start with a diamond
                                    </GradientButton>
                                </div>
                                <div className={styles.footerStartContainer}>
                                    <div style={{
                                        fontFamily: 'NunitoSans',
                                        fontSize: '15px'
                                    }}
                                    >
                                        Spark your imagination with these&nbsp;
                                        <span>
                                            <a href="/diamond-rings/diamond-engagement-rings/">
                                                recently purchased engagement rings.
                                            </a>
                                        </span>
                                    </div>
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
                                        ref={this.stoneSpritenRef}
                                        className={styles.stoneSprite}
                                        style={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            right: '426px',
                                            top: '-24px'
                                        }}
                                    />
                                    <img
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
                                        ref={this.dyuBgRef}
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                    {/* --------------------------- ICONS --------------------*/}
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
                                <div key={name}>
                                    <img
                                        alt={`featured in ${name}`}
                                        title={`featured in ${name}`}
                                        src={`https://ion.r2net.com/images/amazingHomepage/FeaturedBar/Grey/${name}_Grey.svg`}
                                    />
                                </div>
                            ))}
                        </div>
                    </a>
                    {/* --------------------------- HOVER IMAGES --------------------*/}
                    <ZoomImgs data={imgsData} />
                </div>
                {/* --------------------------- Brown bar --------------------*/}
                <div className={styles['meet-bg-container']}>
                    <div className={styles['meet-bg']}>
                        <div
                            className={styles['separator-container']}
                            style={{
                                margin: '0 auto',
                                position: 'relative',
                                bottom: '29px'
                            }}
                        >
                            <div
                                className={styles.separator}
                                style={{ backgroundColor: '#f9f3ec' }}
                            />
                            <div className={styles.separator} style={{ backgroundColor: '#fff' }} />
                        </div>
                    </div>
                    <div className={styles['title-pack']}>
                        <div>meet our</div>
                        <div>best sellers</div>
                    </div>
                </div>
                {/* -------------------------- SLIDE IMAGES --------------------*/}
                <Carousel imgsData={bestSellersGallery} type="bestSellers" />
                {/* -----------------------------------------------*/}
                <DiamondInspection />
                {/* -----------------------------------------------*/}
                <div
                    style={{ margin: '100pxF 0px 60px 0' }}
                    className={`${styles['title-pack']} ${styles.center}`}
                >
                    <div>EXPERIENCE THE</div>
                    <div>DIAMOND REVOLUTION</div>
                    <div className={styles['sub-title']}>
                        Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's
                        biggest collections of loose diamonds, at your fingertips.
                    </div>
                </div>
                {/* ------------------looseDiamonds slider----------------------*/}
                <Carousel imgsData={looseDiamondsGallery} type="looseDiamonds" />
                {/* --------------------------------------*/}
                {/* <CrowningJewels /> */}
                <div className={`${styles['top-brown-text']} ${styles['design-own']}`}>
                    <div>
                        find your sparkle
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: '#fbf8f3',
                        marginBottom: '98px',
                        backgroundPosition: 'top -38px left',
                        position: 'relative',
                        fontFamily: 'NunitoSans',
                        color: 'rgb(27, 27, 27)'
                    }}
                >
                    <div
                        className={`${styles['title-pack']} ${styles.center}`}
                        style={{
                            padding: '50px',
                            width: '500px',
                            margin: '0px auto'
                        }}
                    >
                        <div />
                        <div>the crowning jewels</div>
                        <div className={styles['sub-title']}>
                            Our diamond and gemstone fine jewelry collection offers hand-crafted
                            pieces of unforgettable luxury that are perfect for any occasion.
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={`${styles['text-bg']} ${styles['text-bg-1']}`}>
                            eternity rings
                        </div>
                        <div className={`${styles['text-bg']} ${styles['text-bg-2']}`}>
                            gemstone collection
                        </div>
                        <div className={`${styles['text-bg']} ${styles['text-bg-3']}`}>
                            men's wedding
                        </div>
                        <div className={`${styles['text-bg']} ${styles['text-bg-4']}`}>
                            diamond studs
                        </div>
                        <div
                            className={`${styles.wideContent} ${styles['floating-banners']}`}
                            style={{
                                textAlign: 'center',
                                padding: '300px 0 240px 0'
                            }}
                        >
                            {/*------------------------------*/}
                            <div className={styles['table-align']}>
                                <div className={styles['float-area']}>
                                    <a
                                        href="/wedding-rings/womens-eternity/"
                                    >
                                        <span
                                            ref={this.parallax3Ref}
                                            className={styles['float-white-box']}
                                            style={{ marginBottom: '100px' }}
                                        >
                                            <h3 className={styles['float-header']}>eternity rings</h3>
                                            <div className={styles['float-content']}>
                                                The ultimate symbol of lifelong commitment,
                                                eternity rings make for an ideal wedding or
                                                anniversary ring, or can be worn alongside your
                                                engagement ring.
                                            </div>
                                            <div
                                                className={styles['float-bottom']}
                                                style={{ fontSize: '13px' }}
                                            >
                                                <UnderLinePink style={{ fontSize: '13px' }}>
                                                    Explore
                                                </UnderLinePink>
                                            </div>
                                        </span>
                                    </a>
                                    <div
                                        ref={this.pink1Ref}
                                        className={`${styles['pink-box']} ${styles['pink-box1']}`}
                                    />
                                </div>
                                <div />
                            </div>
                            {/*------------------------------*/}
                            <div
                                className={`${styles['table-align']} ${styles['images-align']}`}
                                style={{ marginTop: '-380px' }}
                            >
                                <div>
                                    <div
                                        className={styles['float-area']}
                                        style={{ marginTop: '400px' }}
                                    >
                                        <a
                                            href="/wedding-rings/mens-classic/"
                                            data-container="#WidePane"
                                        >
                                            <span
                                                ref={this.parallax2Ref}
                                                className={styles['float-white-box']}
                                                style={{ marginBottom: '200px' }}
                                            >
                                                <h3 className={styles['float-header']}>
                                                    Men's Wedding Rings
                                                </h3>
                                                <div className={styles['float-content']}>
                                                    Match his style with the perfect wedding ring,
                                                    be it traditional classic
                                                    , rugged carved, elegant diamond, or funky
                                                    alternative metal.
                                                </div>
                                                <div className={styles['float-bottom']}>
                                                    <UnderLinePink style={{ fontSize: '13px' }}>
                                                        Discover
                                                    </UnderLinePink>
                                                </div>
                                            </span>
                                        </a>
                                        <div
                                            ref={this.pink3Ref}
                                            className={`${styles['pink-box']} ${styles['pink-box3']}`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className={styles['float-area']}
                                        style={{ marginTop: '250px' }}
                                    >
                                        <div
                                            ref={this.pink2Ref}
                                            className={`${styles['pink-box']} ${styles['pink-box2']}`}
                                        />
                                        <a
                                            href="/gemstones/blue-sapphire/"
                                            data-container="#WidePane"
                                        >
                                            <span
                                                ref={this.parallax1Ref}
                                                className={styles['float-white-box']}
                                                style={{ marginBottom: '100px' }}
                                            >
                                                <h3 className={styles['float-header']}>gemstone collection</h3>
                                                <div className={styles['float-content']}>Kissed by the colors of nature, sapphire, ruby, and emerald jewelry makes for a stunningly exotic look.</div>
                                                <div className={styles['float-bottom']}>
                                                    <UnderLinePink style={{ fontSize: '13px' }}>
                                                        Browse
                                                    </UnderLinePink>
                                                </div>
                                            </span>

                                        </a>
                                    </div>
                                    <div>
                                        <div
                                            className={styles['float-area']}
                                            style={{ marginTop: '400px' }}
                                        >
                                            <a
                                                href="/fine-jewelry/design-your-own-studs/"
                                                data-container="#WidePane"
                                            >
                                                <span
                                                    ref={this.parallax4Ref}
                                                    className={styles['float-white-box']}
                                                    style={{ marginBottom: '50px' }}
                                                >
                                                    <h3 className={styles['float-header']}>diamond studs</h3>
                                                    <div className={styles['float-content']}>
                                                       The perfect gift for any occasion, these
                                                        handcrafted preset diamond studs make a bold
                                                        yet elegant statement.
                                                    </div>
                                                    <div className={styles['float-bottom']}>
                                                        <UnderLinePink style={{ fontSize: '13px' }}>
                                                            Browse
                                                        </UnderLinePink>
                                                    </div>
                                                </span>
                                            </a>
                                            <div
                                                ref={this.pink4Ref}
                                                className={`${styles['pink-box']} ${styles['pink-box4']}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------*/}
                <div
                    className={`${styles['title-pack']} ${styles.center}`}
                    style={{ marginBottom: '98px' }}
                >
                    <div>your personal</div>
                    <div>diamond concierge awaits...</div>
                </div>
                <div className={styles.wideContent} style={{ marginBottom: '105px' }}>
                    <div className={styles['as-container']}>
                        <div
                            className={styles['as-content']}
                            style={{
                                backgroundColor: '#f0e2da',
                                paddingRight: '33px'
                            }}
                        >
                            <div className={`${styles.Costumer_Brake} ${styles['img-bg']}`} />
                            <div className={styles['as-text']} style={{ borderLeft: 'none' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{
                                        fontSize: '25px',
                                        lineHeight: '30px'
                                    }}
                                    >
                                        VISIT OUR FIFTH AVENUE,
                                    </div>
                                    <div style={{
                                        fontSize: '32px',
                                        marginBottom: '30px',
                                        fontWeight: 'bold'
                                    }}
                                    >
                                        NYC SHOWROOM
                                    </div>
                                    <div style={{
                                        fontSize: '15px',
                                        marginBottom: '30px'
                                    }}
                                    >
                                        Stop by our ‘sanctuary of sparkle’ on Fifth Avenue for a
                                        truly immersive 3D experience. Our NYC showroom is
                                        <i>the</i>
                                        {' '}
                                        place to view diamond rings and fine jewelry up
                                        close,
                                        and
                                        try on
                                        actual products -
                                        <b>by appointment only</b>
                                        .
                                    </div>

                                    <UnderLinePink style={{ fontSize: '16px' }}>
                                        Schedule Appointment
                                    </UnderLinePink>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles['as-content']}
                            style={{
                                backgroundColor: '#fae4cb',
                                paddingLeft: '33px'
                            }}
                        >
                            <div className={styles['as-text']} style={{ borderRight: 'none' }}>
                                <div>
                                    <div style={{
                                        fontSize: '25px',
                                        lineHeight: '30px'
                                    }}
                                    >
                                        WORLD-CLASS
                                    </div>
                                    <div style={{
                                        fontSize: '32px',
                                        marginBottom: '30px',
                                        fontWeight: 'bold'
                                    }}
                                    >
                                        CUSTOMER SERVICE
                                    </div>
                                    <div style={{
                                        fontSize: '15px',
                                        marginBottom: '30px'
                                    }}
                                    >
                                        James Allen’s team of non-commissioned certified gemologists
                                        is available 24/7 via live chat, phone, and email to help
                                        you choose the product that’s right for you.
                                    </div>
                                    <UnderLinePink style={{ fontSize: '16px' }}>
                                        Contact Us
                                    </UnderLinePink>
                                </div>
                            </div>
                            <div className={styles['img-bg']} />
                        </div>
                    </div>
                </div>
                {/* --------------------------------------*/}
                <div className={styles['pics-or']}>
                    <div className={styles['meet-bg-container']}>
                        <div className={styles['meet-bg']}>
                            <div
                                className={styles['separator-container']}
                                style={{
                                    margin: '0 auto',
                                    position: 'relative',
                                    bottom: '29px'
                                }}
                            >
                                <div
                                    className={styles.separator}
                                    style={{ backgroundColor: '#f9f3ec' }}
                                />
                                <div
                                    className={styles.separator}
                                    style={{ backgroundColor: '#fff' }}
                                />
                            </div>
                        </div>
                        <div className={styles['title-pack']}>
                            <div />
                            <div>
                                Pics or It Didn’t Happen!
                            </div>
                            <div className={styles['sub-title']}>
                                View our customers’ engagement moments from around the world
                            </div>
                        </div>
                    </div>
                    <Collage />
                    <GradientButton href="/topis">
                        read the stories
                    </GradientButton>
                </div>
            </div>
        );
    }
}
