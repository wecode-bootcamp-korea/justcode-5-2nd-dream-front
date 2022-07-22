import React from 'react';
import css from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/products/${item.product_id}`)}>
      <img className={css.pic} src={item?.image_url} alt="img" />
      <div className={css.nam}>{item?.product_name}</div>
      <div className={css.com}>{item?.brand}</div>
      <div className={css.pri}>{item?.price} 원</div>
    </div>
  );
};

export default ProductCard;
