import React, { useEffect, useState } from 'react';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductStyle from '../../components/ProductStyle/ProductStyle';
import OtherProduct from '../../components/OtherProduct/OtherProduct';
import css from './ProductDetail.module.scss';
import BASE_URL from '../../config';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [styleList, setStyleList] = useState(undefined);
  const [otherList, setOtherList] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    fetch(`${BASE_URL}/style`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStyleList(data.data.slice(0, 4));
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/main`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const filteredList = data.data[0]
          .filter(d => d.product_id !== Number(id))
          ?.slice(0, 6);
        setOtherList(filteredList);
      });
  }, [id]);

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <ProductImage />
        <ProductInfo />
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
