import React, { useState, useEffect } from 'react';
import css from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BASE_URL from '../../config';

const ProductCard = ({ item }) => {
  const [isWished, setIsWished] = useState();
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const toggleWish = method => {
    return {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        product_id: item.product_id,
      }),
    };
  };

  const wish = () => {
    if (!userId) {
      navigate('/login');
    } else if (!isWished) {
      fetch(`${BASE_URL}/wish`, toggleWish('POST')).then(setIsWished(true));
    } else {
      fetch(`${BASE_URL}/wish`, toggleWish('DELETE')).then(setIsWished(false));
    }
  };
  return (
    <div
      className={css.container}
      onClick={() => navigate(`/products/${item.product_id}`)}
    >
      <div className={css.pic_cont}>
        <img className={css.pic} src={item?.image_url} alt="img" />
      </div>
      <div className={css.content_header}>
        <div className={css.com}>{item?.brand}</div>
        <img
          className={css.like}
          src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/external-Save-social-media-bearicons-detailed-outline-bearicons.png"
          alt="관심상품"
        ></img>
      </div>
      <h1 className={css.nam}>{item?.product_name}</h1>
      <div className={css.pri}>{item?.price} 원</div>
    </div>
  );
};

export default ProductCard;
