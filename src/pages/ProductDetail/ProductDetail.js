import React, { useEffect, useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStyle from './ProductStyle/ProductStyle';
import OtherProduct from './OtherProduct/OtherProduct';
import css from './ProductDetail.module.scss';
import { BASE_URL } from '../../config';
import { useLocation } from 'react-router-dom';
const accessToken = localStorage.getItem('token');

function ProductDetail(props) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { isLogin } = props;

  const [styleList, setStyleList] = useState(undefined);
  useEffect(() => {
    fetch(`${BASE_URL}/style?sort=like_num`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStyleList(data.data.slice(0, 4));
      });
  }, []);

  const [otherList, setOtherList] = useState(undefined);
  useEffect(() => {
    fetch(`${BASE_URL}/main`, {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        const filteredList = data.data[0]
          .filter(d => d.product_id !== Number(id))
          ?.slice(0, 6);
        setOtherList(filteredList);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <ProductImage />
        <ProductInfo isLogin={isLogin} />
      </div>
      <h2>스타일</h2>
      <div className={css.style_container}>
        {styleList?.map(style => (
          <ProductStyle key={style.style_id} style={style} />
        ))}
      </div>
      <h2>다른 상품</h2>
      <div className={css.other_container}>
        {otherList?.map(other => (
          <OtherProduct key={other.product_id} other={other} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
