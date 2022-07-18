import React from 'react';
import css from './OtherProduct.module.scss';
import { Link } from 'react-router-dom';

function OtherProduct() {
  return (
    <div className={css.container}>
      <img
        className={css.style_img}
        src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
        alt="style"
      />
      <Link to className={css.product}>
        Aurolee
      </Link>
      <p className={css.content}>test</p>
      <div className={css.price}>280,000원</div>
      <p className={css.immediately}>즉시 구매가</p>
    </div>
  );
}

export default OtherProduct;
