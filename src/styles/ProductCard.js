import React from 'react';
import css from './ProductCard.module.scss';
const ProductCard = ({ item }) => {
  return (
    <div>
      <div className={css.swap}>
        <img className={css.pic} src={item?.Img} alt="img" />
        <img className={css.spic} src={item?.smallImg} alt="img" />
        <div className={css.nam}>{item?.nickname}</div>
        <div className={css.tag}>{item?.tag}</div>
        <div className={css.like}>🙂: {item?.like}</div>
        <div className={css.reply}>💬: {item?.reply}</div>
        <img className={css.propic} src={item?.productImg} alt="img" />
        <div className={css.prname}>{item?.productName}</div>
        <div className={css.pri}>{item?.price} 원</div>
      </div>
    </div>
  );
};

export default ProductCard;
