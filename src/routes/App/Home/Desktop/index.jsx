/* eslint-disable react/no-string-refs,react/no-array-index-key */
import React from 'react';
import SliderSlick from 'react-slick';
import styles from './styles.scss';
import stylesSlick from './slick.scss';
import stylesGeneral from './general.scss';
import TopBanner from './TopBanner';
import JustifyAlign from './JustifyAlign/index.jsx';
import Collage from "./Collage";
import HomeSlider from "./HomeSlider";

const looseDiamondsGallery = [
    {
        name: 'round',
        alt: 'round',
        sub: 'Maximizes light return from the top of the stone'
    },
    {
        name: 'princess',
        alt: 'princess',
        sub: 'Maximum brilliance in an exquisite square form'
    },
    {
        name: 'emerald',
        alt: 'emerald',
        sub: 'Long lines create an elegant and sophisticated look'
    },
    {
        name: 'asscher',
        alt: 'asscher',
        sub: 'Vintage-style square shape with cropped corners'
    },
    {
        name: 'oval',
        alt: 'oval',
        sub: 'Elongated shape accentuates the length of the finger'
    },
    {
        name: 'radiant',
        alr: 'radiant',
        sub: 'Brilliance combined with non-traditional cropped corners'
    },
    {
        name: 'pear',
        alt: 'pear',
        sub: 'Tradition meets brilliance in unique ‘water drop’ shape'
    },
    {
        name: 'heart',
        alt: 'heart',
        sub: 'Features a distinctive cleft at the top and superior brilliance'
    },
    {
        name: 'marquise',
        alt: 'marquise',
        sub: 'Long, narrow surface makes it appear larger than life'
    },
    {
        name: 'cushion',
        alt: 'cushion',
        sub: 'Antique cut with 58 facets and rounded corners'
    }
];

const bestSellersGallery = [
    {
        src: 'Channel-Set-Engagement-Ring',
        name: 'Channel Set',
        alt: 'Channel Set',
        sub: 'Bezel Set Pavé Engagement Ring',
        href: '/engagement-rings/tension/14k-white-gold-bezel-set-pave-diamond-engagement-ring-item-53294'
    },
    {
        src: 'Halo-Women-Engagement-Ring',
        name: 'Halo',
        alt: 'Halo',
        sub: 'Floral Halo Engagement Ring',
        href: '/engagement-rings/vintage/14k-rose-gold-floral-halo-engagement-ring-item-53439'
    },
    {
        src: 'Anniversary-Ring',
        name: 'Anniversary',
        alt: 'Anniversary',
        sub: 'Bar Set Anniversary Ring',
        href: '/wedding-rings/womens-anniversary/18k-white-gold-100ctw-bar-set-diamond-anniversary-ring-item-16453'
    },
    {
        src: 'Side-stone-Engagement-Ring',
        name: 'Side-stone',
        alt: 'Side-stone',
        sub: 'Round & Marquise Diamond Engagement Ring',
        href: '/engagement-rings/side-stones/14k-white-gold-round-and-marquise-shape-diamond-engagement-ring-item-49489'
    },
    {
        src: 'eternity-ring',
        name: 'Eternity',
        alt: 'Eternity',
        sub: 'Angled Common Prong Diamond Eternity Ring',
        href: '/wedding-rings/womens-eternity/14k-yellow-gold-ladies-050ctw-angled-common-prong-diamond-eternity-ring-item-56291'
    },
    {
        src: 'Halo-Engagement-Ring',
        name: 'Halo',
        alt: 'Halo',
        sub: 'Round Split Band Halo Engagement Ring',
        href: '/engagement-rings/halo/14k-white-gold-round-split-band-diamond-halo-engagement-ring-item-49498'
    },
    {
        src: 'Solitaire-Classic-Engagement-Ring',
        name: 'Solitaire',
        alt: 'Solitaire',
        sub: 'Rope Solitaire Engagement Ring',
        href: '/engagement-rings/solitaire/14k-white-gold-rope-solitaire-engagement-ring-item-52624'
    },
    {
        src: 'Stackable-Ring',
        name: 'Stackable',
        alt: 'Stackable',
        sub: 'Round Diamond & Marquise Sapphire Wedding Ring',
        href: '/wedding-rings/womens-stackable/14k-white-gold-round-brilliant-diamond-and-marquise-sapphire-wedding-ring-item-49417'
    },
    {
        src: 'diamond-pendant',
        name: 'Diamond Pendant',
        alt: 'Diamond Pendant',
        sub: 'Pavé Set Pendant Frame',
        href: '/fine-jewelry/design-your-own-pendants/18k-white-gold-pave-set-frame-pendant-mounting-item-17021'
    },
    {
        src: 'Side-stone-Diamond-Engagement-Ring',
        name: 'Side-stone',
        alt: 'Side-stone',
        sub: 'Blossoming Vine Engagement Ring',
        href: '/engagement-rings/side-stones/14k-yellow-gold-blossoming-vine-engagement-ring-item-53370'
    },
    {
        src: 'Solitaire-Engagement-Ring',
        name: 'Solitaire',
        alt: 'Solitaire',
        sub: 'Knife Edge Solitaire Engagement Ring',
        href: '/engagement-rings/solitaire/14k-white-gold-2mm-knife-edge-solitaire-engagement-ring-item-7115'
    },
    {
        src: 'pave-engagement-ring',
        name: 'Pavé',
        alt: 'Pavé',
        sub: 'Petite Pavé Flush Fit Engagement Ring',
        href: '/engagement-rings/pave/14k-rose-gold-petite-pave-engagement-ring-flush-fit-item-56265'
    },
    {
        src: 'Three-stone-Engagement-Ring',
        name: 'Three-stone',
        alt: 'Three-stone',
        sub: 'Tapered Baguette Diamond Engagement Ring',
        href: '/engagement-rings/side-stones/14k-white-gold-tapered-baguette-diamond-engagement-ring-item-7101'
    }
];

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

class NextArrow extends React.Component {
    render() {
        return (
            <div
                {...this.props}
                className={stylesSlick['next-carousel-button']}
            >
            &#xe626;
            </div>
        );
    }
}

class PrevArrow extends React.Component {
    render() {
        return (
            <div
                {...this.props}
                className={stylesSlick['prev-carousel-button']}
            >
            &#xe625;
            </div>
        );
    }
}

let slider1 = null;

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
        // this.refs.bestSellersHeader.innerText = bestSellersGallery[0].name;
        // this.refs.bestSellersSub.innerText = bestSellersGallery[0].sub;
        // this.refs.looseDiamondsHeader.innerText = looseDiamondsGallery[0].name;
        // this.refs.looseDiamondsSub.innerText = looseDiamondsGallery[0].sub;
        global.window.addEventListener('scroll', this.handleScroll);
        // this.makeSmooth();
    }

    componentWillUnmount() {
        // global.window.off('mousewheel DOMMouseScroll');
        // global.window.removeEventListener('scroll', this.handleScroll);
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
            const pinks = [{ pink: 1, el: this.refs.pink1 }, { pink: 2, el: this.refs.pink2 },
                { pink: 3, el: this.refs.pink3 }, { pink: 4, el: this.refs.pink4 }];
            const { bottom } = this.refs.parallax1.getBoundingClientRect();
            if (bottom > -1600 && bottom < screen.height + 1000) {
                arr.forEach((el) => {
                    el.style.bottom = `${(bottom / 8).toFixed()}px`;
                });
                const bgSpeed = 20;
                pinks.forEach((d) => {
                    d.el.style.bottom = `${(bottom / 7).toFixed()}px`;
                    const speedDelta = bottom / bgSpeed;
                    d.el.style.backgroundPositionY = d.pink == 1 ? `${(speedDelta - 100).toFixed()}px`
                        : d.pink == 2 ? `${(speedDelta).toFixed()}px`
                            : d.pink == 3 ? `${(speedDelta - 40).toFixed()}px`
                                : d.pink == 4 ? `${speedDelta.toFixed()}px`
                                    : `${(speedDelta - 100).toFixed()}px`;
                });
            }
        }

        if (bottomSection) {
            const { bottom } = bottomSection.getBoundingClientRect();
            if (bottom > -600 && bottom < screen.height + 1000) {
                bottomSection.style.backgroundPosition = `right 70px top 100px, 0 ${0 + (bottom / 20).toFixed()}px`;
            }
        }

        if (dyuBg) {
            const { bottom } = dyuBg.getBoundingClientRect();
            if (bottom > -600 && bottom < screen.height + 1000) {
                dyuBg.style.transform = `translate(-50%, ${(bottom / 23 - 10).toFixed()}px)`;
            }
        }

        if (designYouOwn) {
            const top = pageYOffset * 0.1;
            designYouOwn.style.top = `${top}px`;
        }

        if (sparkleBg) {
            const bsTop = sparkleBg.getBoundingClientRect().top;
            const top = 200 + ((bsTop - 383) * 0.06);
            // if (bs && bsTop > 383) {
            sparkleBg.style.top = `${top}px`;
            // }
        }

        const progSpeed = (global.window.innerWidth) <= 1460 ? 0.56 : (global.window.innerWidth) <= 1280 ? 0.6 : 0.36;
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

    makeSmooth() {
        // const $window = $(window);
        const scrollTime = 1.2;
        const scrollDistance = 230;
        global.window.on('mousewheel DOMMouseScroll', (event) => {
            event.preventDefault();
            const delta = event.originalEvent.wheelDelta / 120
                               || -event.originalEvent.detail / 3;
            const scrollTop = global.window.scrollTop();
            const finalScroll = scrollTop - parseInt(delta * scrollDistance);

            // TweenLite.to($window, scrollTime, {
            //     scrollTo: { y: finalScroll, autoKill: true },
            //     ease: Expo.easeOut,
            //     overwrite: 5
            // });
        });
    }

    // storeSliderRef(c) {
    //     slider1 = c;
    //     console.log(slider1);
    // }

    render() {
        // const settings = {
        //     dots: false,
        //     infinite: true,
        //     slidesToShow: 5,
        //     slidesToScroll: 1,
        //     centerMode: true,
        //     draggable: this.isTouch,
        //     responsive: [{ breakpoint: 1600, settings: { slidesToShow: 4.31 } },
        //         { breakpoint: 1300, settings: { slidesToShow: 3 } }],
        //     nextArrow: <NextArrow />,
        //     prevArrow: <PrevArrow />,
        //     centerPadding: '-100px'
        // };
        // const bestSellersSettings = Object.assign({
        //     beforeChange: (i, next) => {
        //         this.refs.bestSellersHeader.innerText = this.bestSellersGallery[next].name;
        //         this.refs.bestSellersSub.innerText = this.bestSellersGallery[next].sub;
        //     },
        //     className: `${stylesSlick['homepage-slick']} ${stylesSlick['ring-slick']}`,
        // }, settings);
        // const looseDiamondsSettings = Object.assign({
        //     beforeChange: (i, next) => {
        //         this.refs.looseDiamondsHeader.innerText = `${this.looseDiamondsGallery[next].name}`;
        //         this.refs.looseDiamondsSub.innerText = this.looseDiamondsGallery[next].sub;
        //     },
        //     className: `${stylesSlick['homepage-slick']} ${stylesSlick['diamond-slick']}`,
        // }, settings);
        return (
            <div>
                <TopBanner />
                <div style={{ position: 'relative' }}>
                    <div ref="designYouOwn" style={{ position: 'absolute', width: '100%', paddingTop: '0px' }}>
                        <div className={`${styles['top-brown-text']} ${styles['design-own']} }`}>
                            <div>
                                design your own
                            </div>
                        </div>
                        <div className={styles['top-brown']}>
                            <div className={styles.wideContent} style={{ position: 'relative', height: '240px' }}>
                                <div
                                    className={styles['separator-container']}
                                    style={{ margin: '0 auto', position: 'absolute', bottom: '-29px' }}
                                >
                                    <div className={styles.separator} style={{ backgroundColor: '#fff' }} />
                                    <div className={styles.separator} style={{ backgroundColor: '#f9f3ec' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesGeneral.wideContent} style={{ position: 'relative', marginBottom: '105px' }}>
                    <JustifyAlign className={styles['start-align']} data-styled={{ fontSize: 0, height: '860px', display: 'flex' }}>
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
                                        <br />
                                        It’s really up to you!
                                    </div>
                                </div>
                                <JustifyAlign className={styles['start-button-container']}>
                                    <div className={styles['start-button']} style={{ verticalAlign: 'middle' }}>
                                        <a style={{ padding: '12px 27px', fontFamily: 'NunitoSans' }} href="/engagement-rings/all-settings/" data-container="#WidePane">
                                            start with a setting
                                        </a>
                                    </div>
                                    <div style={{ verticalAlign: 'middle', fontFamily: 'NunitoSans' }}>
                                        or
                                    </div>
                                    <div className={styles['start-button']} style={{ verticalAlign: 'middle' }}>
                                        <a style={{ padding: '12px 21px', fontFamily: 'NunitoSans' }} href="/loose-diamonds/all-diamonds/" data-container="#WidePane">
                                            start with a diamond
                                        </a>

                                    </div>
                                </JustifyAlign>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <span style={{ fontFamily: 'NunitoSans' }}>
                                        Spark your imagination with these
                                    </span>
                                    <a style={{ color: '#ff8081', textDecoration: 'underline', fontFamily: 'NunitoSans' }} href="/diamond-rings/diamond-engagement-rings/" data-container="#WidePane">
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
                                            position: 'absolute', zIndex: 1, right: '0', top: '174px'
                                        }}
                                        src="https://ion.r2net.com/images/amazingHomepage/ring.png?v=2"
                                        alt="James Allen 14K white gold diamond engagement ring"
                                    />
                                    <div
                                        ref="stoneSprite"
                                        className={styles.stoneSprite}
                                        style={{
                                            position: 'absolute', zIndex: 1, right: '426px', top: '-24px'
                                        }}
                                    />
                                    <img
                                        ref="prong"
                                        style={{
                                            position: 'absolute', zIndex: 2, top: '338px', right: '470px'
                                        }}
                                        src="https://ion.r2net.com/images/amazingHomepage/Prong.png?v=2"
                                        alt=""
                                    />
                                    <img src="https://ion.r2net.com/images/amazingHomepage/dyu-bg.png?v=6" alt="" className={styles['dyu-bg']} ref="dyuBg" />
                                </div>
                            </span>
                        </div>
                    </JustifyAlign>
                    {/* --------------------------- ICONS --------------------*/}
                    <a href="/about-us-press/" data-container="#WidePane" style={{ display: 'block', position: 'relative', bottom: '29px' }}>
                        <div className={styles['featured-bar']}>
                            {iconsData.map(name => (
                                <div key={name}>
                                    <img alt={`featured in ${name}`} title={`featured in ${name}`} src={`https://ion.r2net.com/images/amazingHomepage/FeaturedBar/Grey/${name}_Grey.svg`} />
                                </div>
                            ))}
                        </div>
                    </a>
                    {/* --------------------------- HOVER IMAGES --------------------*/}
                    <JustifyAlign className={styles['events-align']} data-styled={{ position: 'relative', zIndex: 3, fontFamily: 'NunitoSans' }} data-gtm-name="large image splash">
                        {imgsData.map(item => (
                            <div key={item.to}>
                                <div className={styles['abs-scale']}>
                                    <div className={styles.abs}>
                                        <div className={styles.line} />
                                        <div className={styles['line-text']}>
                                            {item.text}
                                        </div>
                                    </div>
                                    <div className={styles['abs-img-box']}>
                                        <a href={item.to} data-container="#WidePane">
                                            <img src={item.imgSrc} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </JustifyAlign>
                </div>
                {/* --------------------------- Brown bar --------------------*/}
                <div className={styles['meet-bg-container']}>
                    <div className={styles['meet-bg']}>
                        <div
                            className={styles['separator-container']}
                            style={{ margin: '0 auto', position: 'relative', bottom: '29px' }}
                        >
                            <div className={styles.separator} style={{ backgroundColor: '#f9f3ec' }} />
                            <div className={styles.separator} style={{ backgroundColor: '#fff' }} />
                        </div>
                    </div>
                    <div className={styles['title-pack']}>
                        <div>meet our</div>
                        <div>best sellers</div>
                    </div>
                </div>
                {/* -------------------------- SLIDE IMAGES --------------------*/}
                {/*<SliderSlick ref={this.storeSliderRef} {...bestSellersSettings}>*/}
                    {/*{bestSellersGallery.map((item, i) => (*/}
                        {/*<span key={i}>*/}
                            {/*<a href={item.href} data-container="#WidePane" data-gtm-name="best sellers" title={item.alt}>*/}
                                {/*<span>*/}
                                    {/*<img*/}
                                        {/*className={styles.slickImg}*/}
                                        {/*src={`https://ion.r2net.com/images/amazingHomepage/rings/${item.src}.png?v=8`}*/}
                                        {/*alt=""*/}
                                    {/*/>*/}
                                {/*</span>*/}
                            {/*</a>*/}
                        {/*</span>*/}
                    {/*))}*/}
                {/*</SliderSlick>*/}

                <HomeSlider imgsData={bestSellersGallery}/>
                {/* --------------------------- SLIDE IMAGES - BUTTONS --------------------*/}
                {/*<div className={styles['mystic-text']}>*/}
                    {/*/!*<div className={styles['arrow-right']} onClick={() => slider1.slickNext()} />*!/*/}
                    {/*<div*/}
                        {/*style={{*/}
                            {/*fontSize: '18px', fontWeight: 'bold', fontFamily: 'NunitoSans', color: 'rgb(35, 35, 35)', textTransform: 'uppercase'*/}
                        {/*}}*/}
                        {/*ref="bestSellersHeader"*/}
                    {/*/>*/}
                    {/*<div style={{ fontSize: '16px', fontFamily: 'NunitoSans', color: 'rgb(35, 35, 35)' }} ref="bestSellersSub" />*/}
                    {/*/!*<div className={styles['arrow-left']} onClick={() => slider1.slickPrev()} />*!/*/}
                {/*</div>*/}
                {/* -----------------------------------------------*/}
                <div className={styles['bottom-section']} ref="bottomSection">
                    <div className={styles['bottom-left-bg-container']}>
                        <div ref="sparkleBg" className={styles['sparkle-bg']} />
                        <div className={styles['bottom-left-bg']} />
                    </div>
                    <div className={stylesGeneral.wideContent} data-gtm-name="diamond inspection">
                        <div className={stylesGeneral['table-align']}>
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
                                            <b>
explore
                                            diamonds in 360° HD
                                            </b>
                                            {' '}
with up to 40x magnification.
                                            Mark points of interest on the screen while chatting
                                            with your diamond expert in
                                            real time, and review everything from the specs to the
                                            grading certificate together.
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '17px', fontFamily: 'NunitoSans', color: 'rgb(27, 27, 27)' }}>
                                        <div style={{ fontWeight: 'bold' }} className={styles['pink-bg']}>
                                            <a href="/diamond-consultation/" data-container="#WidePane">
                                                START YOUR DIAMOND INSPECTION NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -----------------------------------------------*/}
                <div style={{ margin: '100px 0px 60px 0' }} className={`${styles['title-pack']} ${styles.center}`}>
                    <div>EXPERIENCE THE</div>
                    <div>DIAMOND REVOLUTION</div>
                    <div className={styles['sub-title']}>
                        Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's
                        biggest collections of loose diamonds, at your fingertips.
                    </div>
                </div>

                {/* ------------------looseDiamonds slider----------------------*/}
                {/*<SliderSlick ref={c => this.looseDiamondsSlider = c} {...looseDiamondsSettings}>*/}
                    {/*{looseDiamondsGallery.map((item, i) => (*/}
                        {/*<span key={i}>*/}
                            {/*<a*/}
                                {/*title={item.alt}*/}
                                {/*href={`/loose-diamonds/${item.name}-${item.name === 'pear' || item.name === 'heart' ? 'shaped' : 'cut'}/`}*/}
                                {/*data-container="#WidePane"*/}
                                {/*data-gtm-name="diamond revolution"*/}
                            {/*>*/}
                                {/*<span>*/}
                                    {/*<img*/}
                                        {/*className={styles.slickImg}*/}
                                        {/*src={`https://ion.r2net.com/images/amazingHomepage/diamonds/${item.name}-Diamond.png?v=5`}*/}
                                        {/*alt=""*/}
                                    {/*/>*/}
                                {/*</span>*/}
                            {/*</a>*/}
                        {/*</span>*/}
                    {/*))}*/}
                {/*</SliderSlick>*/}
                {/* ------------------looseDiamonds slider buttons----------------------*/}
                {/*<div style={{ marginBottom: '80px' }} className={styles['mystic-text']}>*/}
                    {/*<div className={styles['arrow-right']} onClick={() => this.looseDiamondsSlider.slickNext()} />*/}
                    {/*<div style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase' }} ref="looseDiamondsHeader" />*/}
                    {/*<div style={{ fontSize: '16px' }} ref="looseDiamondsSub" />*/}
                    {/*<div className={styles['arrow-left']} onClick={() => this.looseDiamondsSlider.slickPrev()} />*/}
                {/*</div>*/}
                {/* --------------------------------------*/}
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
                        style={{ padding: '50px', width: '500px', margin: '0px auto' }}
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
                        <div className={`${stylesGeneral.wideContent} ${styles['floating-banners']}`} style={{ textAlign: 'center', padding: '300px 0 240px 0' }} data-gtm-name="floating banners">
                            <div className={stylesGeneral.tableAlign}>
                                <div className={styles['float-area']}>
                                    <a href="/wedding-rings/womens-eternity/" data-container="#WidePane">
                                        <span ref="parallax3" className={styles['float-white-box']} style={{ marginBottom: '100px' }}>
                                            <h3 className={styles['float-header']}>eternity rings</h3>
                                            <div className={styles['float-content']}>
                                                The ultimate symbol of lifelong commitment,
                                                eternity rings make for an ideal wedding or
                                                anniversary ring, or can be worn alongside your
                                                engagement ring.
                                            </div>
                                            <div className={styles['float-bottom']}>
                                                <div className={styles['pink-bg']}>
                                                    explore
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                    <div ref="pink1" className={`${styles['pink-box']} ${styles['pink-box1']}`} />
                                </div>
                                <div />
                            </div>
                            <div className={`${stylesGeneral['table-align']} ${styles['images-align']}`} style={{ marginTop: '-380px' }}>
                                <div>
                                    <div className={styles['float-area']} style={{ marginTop: '400px' }}>
                                        <a href="/wedding-rings/mens-classic/" data-container="#WidePane">
                                            <span ref="parallax2" className={styles['float-white-box']} style={{ marginBottom: '200px' }}>
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
                                                    <div className={styles['pink-bg']}>
                                                        discover
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                        <div ref="pink3" className={`${styles['pink-box']} ${styles['pink-box3']}`} />
                                    </div>
                                </div>
                                <div>
                                    <div className={styles['float-area']} style={{ marginTop: '250px' }}>
                                        <div ref="pink2" className={`${styles['pink-box']} ${styles['pink-box2']}`} />
                                        <a href="/gemstones/blue-sapphire/" data-container="#WidePane">
                                            <span ref="parallax1" className={styles['float-white-box']} style={{ marginBottom: '100px' }}>
                                                <h3 className={styles['float-header']}>gemstone collection</h3>
                                                <div className={styles['float-content']}>Kissed by the colors of nature, sapphire, ruby, and emerald jewelry makes for a stunningly exotic look.</div>
                                                <div className={styles['float-bottom']}>
                                                    <div className={styles['pink-bg']}>
                                                        Browse
                                                    </div>
                                                </div>
                                            </span>

                                        </a>
                                    </div>
                                    <div>
                                        <div className={styles['float-area']} style={{ marginTop: '400px' }}>
                                            <a href="/fine-jewelry/design-your-own-studs/" data-container="#WidePane">
                                                <span ref="parallax4" className={styles['float-white-box']} style={{ marginBottom: '50px' }}>
                                                    <h3 className={styles['float-header']}>diamond studs</h3>
                                                    <div className={styles['float-content']}>
                                                       The perfect gift for any occasion, these
                                                        handcrafted preset diamond studs make a bold
                                                        yet elegant statement.
                                                    </div>
                                                    <div className={styles['float-bottom']}>
                                                        <div className={styles['pink-bg']}>browse</div>
                                                    </div>
                                                </span>
                                            </a>
                                            <div ref="pink4" className={`${styles['pink-box']} ${styles['pink-box4']}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------*/}
                <div className={`${styles['title-pack']} ${styles.center}`} style={{ marginBottom: '98px' }}>
                    <div>your personal</div>
                    <div>diamond concierge awaits...</div>
                </div>
                <div className={stylesGeneral.wideContent} style={{ marginBottom: '105px' }}>
                    <JustifyAlign className={styles['as-container']} data-gtm-name="diamond concierge">
                        <div className={styles['as-content']} style={{ backgroundColor: '#f0e2da', paddingRight: '33px' }}>
                            <div className={`${styles.Costumer_Brake} ${styles['img-bg']}`} />
                            <div className={styles['as-text']} style={{ borderLeft: 'none' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '25px', lineHeight: '30px' }}>
                                        VISIT OUR FIFTH AVENUE,
                                    </div>
                                    <div style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 'bold' }}>
                                        NYC SHOWROOM
                                    </div>
                                    <div style={{ fontSize: '15px', marginBottom: '30px' }}>
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
                                    <div className={styles['pink-bg']} style={{ fontSize: '16px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                        <a href="/showroom/" data-container="#WidePane">
                                            SCHEDULE APPOINTMENT
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['as-content']} style={{ backgroundColor: '#fae4cb', paddingLeft: '33px' }}>
                            <div className={styles['as-text']} style={{ borderRight: 'none' }}>
                                <div>
                                    <div style={{ fontSize: '25px', lineHeight: '30px' }}>
                                        WORLD-CLASS
                                    </div>
                                    <div style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 'bold' }}>
                                        CUSTOMER SERVICE
                                    </div>
                                    <div style={{ fontSize: '15px', marginBottom: '30px' }}>
                                        James Allen’s team of non-commissioned certified gemologists
                                        is available 24/7 via live chat, phone, and email to help
                                        you choose the product that’s right for you.
                                    </div>
                                    <div className={styles['pink-bg']} style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                        <a href="/guarantee/customer-service/" data-container="#WidePane">
                                            CONTACT US
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['img-bg']} />
                        </div>
                    </JustifyAlign>
                </div>
                {/* --------------------------------------*/}
                <div className={styles['pics-or']}>
                    <div className={styles['meet-bg-container']}>
                        <div className={styles['meet-bg']}>
                            <div
                                className={styles['separator-container']}
                                style={{ margin: '0 auto', position: 'relative', bottom: '29px' }}
                            >
                                <div className={styles.separator} style={{ backgroundColor: '#f9f3ec' }} />
                                <div className={styles.separator} style={{ backgroundColor: '#fff' }} />
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
                </div>

                <div className={stylesGeneral.wideContent}>
                    <div className={styles.moments} data-gtm-name="engagement moments">
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=165"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/a_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=59"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/b_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=157"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/c_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=163"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/d_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=161"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/e_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="/engagement-moments/?EngagementMomentID=55"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/f_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className={styles['collage-middle']}>
                            <div>
                                <a
                                    href="/engagement-moments/?EngagementMomentID=470"
                                    data-container="#EngagementMomentsItemPreview"
                                >
                                    <img
                                        src="https://ion.r2net.com/images/amazingHomepage/g_engage.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/engagement-moments/?EngagementMomentID=464"
                                    data-container="#EngagementMomentsItemPreview"
                                >
                                    <img
                                        src="https://ion.r2net.com/images/amazingHomepage/j_engage.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={styles['collage-middle']}>
                            <div>
                                <a
                                    href="/engagement-moments/?EngagementMomentID=408"
                                    data-container="#EngagementMomentsItemPreview"
                                >
                                    <img
                                        src="https://ion.r2net.com/images/amazingHomepage/h_engage.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/engagement-moments/?EngagementMomentID=188"
                                    data-container="#EngagementMomentsItemPreview"
                                >
                                    <img
                                        src="https://ion.r2net.com/images/amazingHomepage/k_engage.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>


                        <div className={styles['collage-double']}>
                            <a
                                href="/engagement-moments/?EngagementMomentID=183"
                                data-container="#EngagementMomentsItemPreview"
                            >
                                <img
                                    src="https://ion.r2net.com/images/amazingHomepage/i_engage.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        data-gtm-name="engagement moments"
                        className={styles['start-button']}
                        style={{
                            width: '225px',
                            margin: '42px auto',
                            textAlign: 'center',
                            fontSize: '18px',
                            display: 'block'
                        }}
                    >
                        <a
                            style={{ padding: '15px 27px', fontFamily: 'NunitoSans' }}
                            href="/engagement-moments/"
                            data-container="#WidePane"
                        >
                            READ THE STORIES
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Desktop;
