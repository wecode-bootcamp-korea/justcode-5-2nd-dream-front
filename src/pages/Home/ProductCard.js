import React from 'react';
import css from './ProductCard.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ item }) => {
  return (
    <div>
      <img className={css.pic} src={item?.image_url} alt="img" />
      <div className={css.nam}>{item?.product_name}</div>
      <div className={css.com}>{item?.brand}</div>
      <div className={css.pri}>{item?.price} 원</div>
    </div>
  );
};

export default ProductCard;
