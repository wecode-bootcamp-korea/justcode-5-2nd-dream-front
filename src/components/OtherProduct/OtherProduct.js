import React from 'react';
import css from './OtherProduct.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function OtherProduct(props) {
  const { other } = props;
  const { brand, price } = other;
  const image = other.image_url;
  const name = other.product_name;
  const id = other.product_id;
  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={css.container} onClick={goToProductDetail}>
      <img className={css.style_img} src={image} alt="style" />
      <Link to className={css.product}>
        {brand}
      </Link>
      <p className={css.content}>{name}</p>
      <div className={css.price}>{price.toLocaleString()}원</div>
      <p className={css.immediately}>즉시 구매가</p>
    </div>
  );
}

export default OtherProduct;
