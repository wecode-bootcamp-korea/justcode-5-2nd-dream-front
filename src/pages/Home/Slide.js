import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import ProductAll from './ProductAll';
import { Container, Row, Col } from 'react-bootstrap';
import css from './Slide.module.scss';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import s6 from './images/s6.png';
import s7 from './images/s7.png';
import s8 from './images/s8.png';
import s9 from './images/s9.png';
import s10 from './images/s10.png';

export default class SwipeToSlide extends Component {
  render() {
    const styles = this.props.data;
    // console.log(this.props);
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div>
        <Container>
          <div class={css.container}>
            <span className={css.font}>Style Picks!</span>
            <Slider {...settings}>
              {styles.map(style => {
                style.nickname = `@${style?.user_email?.split('@')[0]}`;
                return (
                  <div class={css.gap}>
                    <div className={css.baner}>
                      <img className={css.baner_image} src={style.image_url} />
                      {style.user_image ? (
                        <img
                          className={css.user_image}
                          src={style.user_image}
                        />
                      ) : null}
                      <span className={css.nickname}>{style.nickname}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
