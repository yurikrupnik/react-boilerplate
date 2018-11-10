import React, { Component } from 'react';
import Slider from "react-slick";
import styles from './styles.scss';
import stylesSlick from "../slick.scss";

export default class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            currentImgIdx: 0
        }
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            lazyLoad: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            // draggable: this.isTouch,
            responsive: [{ breakpoint: 1600, settings: { slidesToShow: 4.31 } },
                { breakpoint: 1300, settings: { slidesToShow: 3 } }],
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
            centerPadding: "-50px"
        };
        const bestSellersSettings = Object.assign({
            beforeChange: (i, next) => {
                // this.refs.bestSellersHeader.innerText = this.bestSellersGallery[next].name;
                // this.refs.bestSellersSub.innerText = this.bestSellersGallery[next].sub;
                this.setState({
                    currentImgIdx: next
                })
            },
            className: `${stylesSlick['homepage-slick']} ${stylesSlick['ring-slick']}`,
        }, settings);
        const { imgsData } = this.props;
        const { currentImgIdx } = this.state;

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...bestSellersSettings}>
                    {imgsData.map(item => (
                        <a href={item.href} title={item.alt} key={item.name}>
                            <img
                                className={styles["slick-img"]}
                                src={`https://ion.r2net.com/images/amazingHomepage/rings/${item.src}.png?v=8`}
                                alt=""
                            />
                        </a>
                    ))}
                </Slider>

                <div className={styles['mystic-text']}>
                    <div className={styles['arrow-right']} onClick={() => this.slider.slickNext()} />
                    <div
                        style={{fontSize: '18px', fontWeight: 'bold', fontFamily: 'NunitoSans', color: 'rgb(35, 35, 35)', textTransform: 'uppercase'}}
                    >
                        {imgsData[currentImgIdx].name}
                    </div>
                    <div
                        style={{ fontSize: '16px', fontFamily: 'NunitoSans', color: 'rgb(35, 35, 35)' }}

                    >
                        {imgsData[currentImgIdx].sub}
                    </div>
                    <div className={styles['arrow-left']} onClick={() => this.slider.slickPrev()} />
                </div>
            </div>
        );
    }
}
