import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './Banner.module.scss';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import b4 from './images/b4.png';
import b5 from './images/b5.png';
import b6 from './images/b6.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings} className={css.slide}>
          <div>
            <img className={css.banner} src={b1} alt="b1" />
          </div>
          <div>
            <img className={css.banner} src={b2} alt="b2" />
          </div>
          <div>
            <img className={css.banner} src={b3} alt="b3" />
          </div>
          <div>
            <img className={css.banner} src={b4} alt="b4" />
          </div>
          <div>
            <img className={css.banner} src={b5} alt="b5" />
          </div>
          <div>
            <img className={css.banner} src={b6} alt="b6" />
          </div>
        </Slider>
      </div>
    );
  }
}
