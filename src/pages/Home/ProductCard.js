import React from 'react';
import css from './ProductCard.module.scss';
const ProductCard = ({ item }) => {
  return (
    <div>
      {/* <img className={css.pic} src={item?.productImg} alt="img"/> */}
      {/* <div className={css.nam}>{item?.productName}</div>
            <div className={css.com}>{item?.coment}</div>
            <div className={css.pri}>{item?.price} 원</div> */}
      <div className={css.com}>{item?.name}</div>
      <div className={css.com}>{item?.comment}</div>
      <div className={css.com}>{item?.model_number}</div>
      <div className={css.com}>{item?.color}</div>
      <div className={css.com}>{item?.sex}</div>
    </div>
  );
};

export default ProductCard;
