import React, { Component } from 'react';
import Slider from 'react-slick';
import css from './ShopBanner.module.scss';

export default class ShopBanner extends Component {
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
      <div class={css.banner_box}>
        <Slider {...settings} className={css.slide}>
          <div className={css.banner_1}>
            <img
              src="https://i.pinimg.com/564x/0f/c7/5c/0fc75c5afe9f2693b3a92b3c69dba94e.jpg"
              alt="베너1"
            />
          </div>
          <div div className={css.banner_2}>
            <img
              src="https://i.pinimg.com/564x/d8/bd/45/d8bd454776c2586b91744e0be51007cb.jpg"
              alt="베너2"
            />
          </div>
          <div div className={css.banner_3}>
            <img
              src="https://i.pinimg.com/564x/98/47/e7/9847e72d3159be6851e2d3531e5e7c83.jpg"
              alt="베너3"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
