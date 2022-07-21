import React from 'react';
import css from './ProductCard.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductCard = ({ item }) => {
  console.log('item: ', item.image_list[1]);
  return (
    <div>
      <div className={css.swap}>
        <div>
          <img className={css.pic} src={item?.user_image} alt="img" />
        </div>
        <div>
          <img className={css.spic} src={item?.user_image} alt="img" />
        </div>
        <div className={css.nam}>{item?.user_name}</div>
        <div className={css.tag}>{item?.user_name}</div>
        <div className={css.like}>{item?.user_name}</div>
        <div className={css.reply}>{item?.user_name}</div>
        <div>
          <img className={css.propic} src={item?.user_image} alt="img" />
        </div>
        <div className={css.prsname}>{item?.user_name}</div>

        <div className={css.pri}>{item?.price} 원</div>
      </div>
    </div>
  );
};

export default ProductCard;
