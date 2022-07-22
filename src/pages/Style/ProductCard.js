import React from 'react';
import css from './ProductCard.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductCard = ({ item }) => {

  // console.log('item: ', item.image_list[1]);

  // const image_url = item.image_list[0].image_url.replace('&quot;', '');
  // console.log('item: ', image_url);
  console.log(item);

  return (
    <div className={css.productCard}>
      <div className={css.swap}>
        <div>
          <img
            className={css.spic}
            src={item?.image_list[0]?.image_url}
            alt="img"
          />
        </div>
        <img className={css.pic} src={item?.image_url} alt="img" />
        <div>

          <img className={css.spic} src={item?.image_url} alt="img" />
          <img className={css.spic} src={item?.im} alt="img" />

          {item.user_image ? (
            <img className={css.spic} src={item?.user_image} alt="img" />
          ) : null}

        </div>
        <div className={css.nam}>{item?.user_name}</div>
        <div className={css.tag}>{item?.content}</div>
        <div className={css.like}>{item?.like_num}</div>
        <div className={css.reply}>{item?.comment_num}</div>
        {item?.product_list?.map(product => (
          <div className={css.product_container}>
            <img className={css.propic} src={product?.image_url} alt="img" />
            <div>
              <div className={css.prsname}>{product?.product_name}</div>
              <div className={css.pri}>{product?.price} 원</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
