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
            <div>
                <h2> Single Item</h2>
                <SliderSlick {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </SliderSlick>
            </div>
        );
    }
}

export default Slider;
