/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-static-element-interactions,react/self-closing-comp */
import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './styles.scss';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImgIdx: 0
        };
    }

    render() {
        const { imgsData, type } = this.props;
        const { currentImgIdx } = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            // draggable: this.isTouch,
            responsive: [{ breakpoint: 1600, settings: { slidesToShow: 4.31 } },
                { breakpoint: 1300, settings: { slidesToShow: 3 } }],
            centerPadding: '0px',
            beforeChange: (i, next) => {
                this.setState({
                    currentImgIdx: next
                });
            },
            className: `${styles['homepage-slick']} ${type === 'bestSellers'
                ? styles['ring-slick'] : styles['diamond-slick']}`
        };
        return (
            <div>
                <Slider ref={c => this.slider = c} {...settings}>
                    {imgsData.map(item => (
                        <div key={item.name}>
                            <a href={item.href} title={item.alt}>
                                <img src={item.src} alt="" />
                            </a>
                        </div>
                    ))}
                </Slider>
                <div className={styles.textContainer}>
                    <div
                        className={styles.arrowRight}
                        onClick={() => this.slider.slickNext()}
                    >
                    </div>
                    <div className={styles.headerText}>
                        {imgsData[currentImgIdx].name}
                    </div>
                    <div className={styles.subText}>
                        {imgsData[currentImgIdx].sub}
                    </div>
                    <div
                        className={styles.arrowLeft}
                        onClick={() => this.slider.slickPrev()}
                    >
                    </div>
                </div>
            </div>
        );
    }
}
