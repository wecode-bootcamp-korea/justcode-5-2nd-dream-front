import React from 'react';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductStyle from '../../components/ProductStyle/ProductStyle';
import OtherProduct from '../../components/OtherProduct/OtherProduct';
import css from './ProductDetail.module.scss';

function ProductDetail() {
  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <ProductImage />
        <ProductInfo />
      </div>
      <h2>스타일</h2>
      <div className={css.style_container}>
        <ProductStyle />
        <ProductStyle />
        <ProductStyle />
        <ProductStyle />
        <ProductStyle />
        <ProductStyle />
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
