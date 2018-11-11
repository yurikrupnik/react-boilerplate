import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './styles.scss';
import stylesSlick from '../slick.scss';


export default class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImgIdx: 0
        };
    }

    render() {
        const { imgsData } = this.props;
        const { currentImgIdx } = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            // lazyLoad: true,
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
            // className: `${stylesSlick['homepage-slick']} ${stylesSlick['ring-slick']}`
            className: styles.slickContainer
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {imgsData.map((item, index) => (
                        <div className={styles.itemContainer}>
                            <a
                                href={item.href}
                                title={item.alt}
                                key={item.name}
                            >
                                <img
                                    className={(currentImgIdx === index) ? styles.center : styles.noCenter}
                                    // className={styles['slick-img']}
                                    src={item.src}
                                    alt=""
                                />
                            </a>
                        </div>
                    ))}
                </Slider>

                <div className={styles.textSlider}>
                    <div
                        className={styles.arrowRight}
                        onClick={() => this.slider.slickNext()}
                    />
                    <div className={styles.headerText}>
                        {imgsData[currentImgIdx].name}
                    </div>
                    <div className={styles.subText}>
                        {imgsData[currentImgIdx].sub}
                    </div>
                    <div
                        className={styles.arrowLeft}
                        onClick={() => this.slider.slickPrev()}
                    />
                </div>
            </div>
        );
    }
}
