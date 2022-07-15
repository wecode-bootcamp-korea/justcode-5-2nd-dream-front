import React from 'react';
import css from './ProductImage.module.scss';

function ProductImage() {
  return (
    <div className={css.container}>
      <img
        src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
        alt="product"
      />
    </div>
  );
}

export default ProductImage;
