import React, { Component } from 'react';
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
              <div class={css.gap}>
                <img class={css.baner} src={s1} alt="s1" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s2} alt="s2" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s3} alt="s3" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s4} alt="s4" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s5} alt="s5" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s6} alt="s6" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s7} alt="s7" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s8} alt="s8" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s9} alt="s9" />
              </div>
              <div class={css.gap}>
                <img class={css.baner} src={s10} alt="s10" />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
