import React from 'react';
import css from './ProductStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faComment } from '@fortawesome/free-regular-svg-icons';

function ProductStyle() {
  return (
    <div className={css.container}>
      <img
        className={css.style_img}
        src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
        alt="style"
      />
      <div className={css.user}>
        <img
          className={css.user_img}
          src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
          alt="style"
        />
        <div className={css.user_name}>test</div>
      </div>
      <p className={css.content}>test</p>
      <div className={css.cnt}>
        <div className={css.like}>
          <FontAwesomeIcon icon={faSmile} />
          <div>66</div>
        </div>
        <div className={css.comment}>
          <FontAwesomeIcon icon={faComment} />
          <div>66</div>
        </div>
      </div>
    </div>
  );
}

export default ProductStyle;
