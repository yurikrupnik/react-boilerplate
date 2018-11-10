import React, {Component} from 'react';
import Slider from "react-slick";
import styles from './styles.scss';
import stylesSlick from "../slick.scss";

export default class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImgIdx: 0
        }
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
            responsive: [{breakpoint: 1600, settings: {slidesToShow: 4.31}},
                {breakpoint: 1300, settings: {slidesToShow: 3}}],
            centerPadding: "-100px",
            beforeChange: (i, next) => {
                this.setState({
                    currentImgIdx: next
                })
            },
            className: `${stylesSlick['homepage-slick']} ${stylesSlick['ring-slick']}`
        };
        const {imgsData} = this.props;
        const {currentImgIdx} = this.state;

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
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

                <div className={styles.textSlider}>
                    <div className={styles.arrowRight} onClick={() => this.slider.slickNext()}/>
                    <div className={styles.headerText}>
                        {imgsData[currentImgIdx].name}
                    </div>
                    <div className={styles.subText}>
                        {imgsData[currentImgIdx].sub}
                    </div>
                    <div className={styles.arrowLeft} onClick={() => this.slider.slickPrev()}/>
                </div>
            </div>
        );
    }
}
