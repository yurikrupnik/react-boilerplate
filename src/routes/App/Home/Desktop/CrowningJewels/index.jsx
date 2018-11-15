import React from 'react';
import styles from './styles.scss';
import UnderLinePink from '../UnderLinePink';

const CrowningJewels = () => (
    <div className={styles.root}>
        <div className={`${styles['top-brown-text']} ${styles['design-own']}`}>
            <div>
                find your sparkle
            </div>
        </div>
        <div className={styles.header}>
            <div
                className={`${styles['title-pack']} ${styles.center}`}
                style={{
                    padding: '50px',
                    width: '500px',
                    margin: '0px auto'
                }}
            >
                <div />
                <div>
                    the crowning jewels
                </div>
                <div className={styles['sub-title']}>
                    Our diamond and gemstone fine jewelry collection offers hand-crafted
                    pieces of unforgettable luxury that are perfect for any occasion.
                </div>
            </div>
        </div>
        <div className={styles.main}>
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
                <div className={styles['table-align']}>
                    <div className={styles['float-area']}>
                        <a href="/wedding-rings/womens-eternity/">
                            <span
                                // ref="parallax3"
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
                                <div className={styles['float-bottom']} style={{ fontSize: '13px' }}>
                                    <UnderLinePink style={{ fontSize: '13px' }}>
                                        Explore
                                    </UnderLinePink>
                                </div>
                            </span>
                        </a>
                        <div
                            // ref="pink1"
                            className={`${styles['pink-box']} ${styles['pink-box1']}`}
                        />
                    </div>
                    <div />
                </div>
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
                            >
                                <span
                                    // ref="parallax2"
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
                                // ref="pink3"
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
                                // ref="pink2"
                                className={`${styles['pink-box']} ${styles['pink-box2']}`}
                            />
                            <a
                                href="/gemstones/blue-sapphire/"
                                data-container="#WidePane"
                            >
                                <span
                                    // ref="parallax1"
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
                                        // ref="parallax4"
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
                                    // ref="pink4"
                                    className={`${styles['pink-box']} ${styles['pink-box4']}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CrowningJewels;
