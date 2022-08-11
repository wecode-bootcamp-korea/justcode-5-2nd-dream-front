import React, { useState, useEffect } from 'react';
import css from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const ProductCard = ({ item }) => {
  const [isWished, setIsWished] = useState();
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (item.wish_id !== null && accessToken) {
      setIsWished(true);
    } else {
      setIsWished(false);
    }
  }, [item, accessToken]);
  const toggleWish = method => {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
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
    <div className={css.productCard}>
      <div
        className={css.container}
        onClick={() => navigate(`/products/${item.product_id}`)}
      >
        <div className={css.pic_cont}>
          <img className={css.pic} src={item?.image_url} alt="img" />
        </div>
        <div className={css.content_header}>
          <div className={css.com}>{item?.brand}</div>
        </div>
        <h1 className={css.nam}>{item?.product_name}</h1>
        <div className={css.pri}>{item?.price} 원</div>
      </div>
      <span onClick={wish} className={css.bookmark}>
        <FontAwesomeIcon
          icon={faBookmark}
          color={isWished ? 'black' : 'lightgray'}
        />
      </span>
    </div>
  );
};

export default ProductCard;
