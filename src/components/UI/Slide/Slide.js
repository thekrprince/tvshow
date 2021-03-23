import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Slide.css';

export class Slide extends Component {
    render() {
        var settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div className="main">
                <Slider {...settings}>
                    <div className="wdt">
                        <img
                            className="img"
                            src={'assets/theboys.jpg'}
                            alt="theboys"
                        ></img>
                    </div>
                    <div className="wdt">
                        <img
                            className="img"
                            src={'assets/b99.jpg'}
                            alt="Brooklyn99"
                        ></img>
                    </div>
                    <div className="wdt">
                        <img
                            className="img"
                            src={'assets/friends.jpg'}
                            alt="friends"
                        ></img>
                    </div>
                    <div className="wdt">
                        <img
                            className="img"
                            src={'assets/tvd.jpg'}
                            alt="TheVampireDiaries"
                        ></img>
                    </div>
                    <div className="wdt">
                        <img
                            className="img"
                            src={'assets/suits.jpg'}
                            alt="suits"
                        ></img>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Slide;
