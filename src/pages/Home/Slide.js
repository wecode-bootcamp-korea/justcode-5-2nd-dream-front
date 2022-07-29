import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import css from './Slide.module.scss';

export default class SwipeToSlide extends Component {
  render() {
    const styles = this.props.data;
    const num = this.props.displayNum;

    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
    };
    return (
      <div>
        <Container>
          <div class={css.container}>
            <span className={css.font}>Style Picks!</span>
            <Slider {...settings}>
              {styles.slice(0, num).map(style => {
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
