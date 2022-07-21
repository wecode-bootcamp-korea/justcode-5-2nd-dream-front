import React, { useEffect, useState } from 'react';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductStyle from '../../components/ProductStyle/ProductStyle';
import OtherProduct from '../../components/OtherProduct/OtherProduct';
import css from './ProductDetail.module.scss';
import BASE_URL from '../../config';

function ProductDetail() {
  const [styleList, setStyleList] = useState(undefined);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/style`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStyleList(data.data.slice(0, 4));
      });
  }, []);

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
      <h2>Aurolee의 다른 상품</h2>
      <div className={css.other_container}>
        <OtherProduct />
        <OtherProduct />
        <OtherProduct />
        <OtherProduct />
        <OtherProduct />
        <OtherProduct />
      </div>
    </div>
  );
}

export default ProductDetail;
