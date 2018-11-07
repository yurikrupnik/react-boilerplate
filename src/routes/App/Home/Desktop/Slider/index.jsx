import React, { Component } from 'react';
import SliderSlick from 'react-slick';
import styles from './styles.scss';

class Slider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className={styles.root}>
                <h2> Single Item</h2>
                <SliderSlick {...settings}>
                    <div>
                        <div className={styles['slide-0']}><h3>Graph 1</h3></div>
                    </div>
                    <div>
                        <div className={styles['slide-1']}><h3>Graph 2</h3></div>
                    </div>
                    <div>
                        <div className={styles['slide-2']}><h3>Graph 3</h3></div>
                    </div>
                    <div>
                        <div className={styles['slide-3']}><h3>Set Up</h3></div>
                    </div>
                </SliderSlick>
            </div>
        );
    }
}

export default Slider;
