import React from 'react';
import css from './ShopSearchContent.module.scss';

function ShopSearchContent() {
  const productList = [
    {
      id: 1,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'Product name',
      product_name_kor: '제품이름',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 2,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'Product name',
      product_name_kor: '제품이름',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 3,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'Product name',
      product_name_kor: '제품이름',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 4,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'Product name',
      product_name_kor: '제품이름',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 5,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'Product name',
      product_name_kor: '제품이름',
      price: 'price',
      wish_figure: '1000',
    },
  ];
  return (
    <div className={css.search_content}>
      <div className={css.search_option}>
        <div className={css.filter_sorting}>
          <select>
            <option>인기순</option>
            <option>발매일순</option>
          </select>
        </div>
      </div>

      <div className={css.search_list}>
        {productList.map(productList => {
          return (
            <div className={css.search_item} key={productList.id}>
              <div className={css.product}>
                <img src={productList.img} alt={productList.img_text} />
              </div>
              <div className={css.product_info}>
                <p className={css.brand_name}>{productList.brand}</p>
                <p className={css.product_name}>{productList.product_name}</p>
                <p className={css.product_name_kor}>
                  {productList.product_name_kor}
                </p>
              </div>
              <div className={css.product_price}>
                <p className={css.price}>{productList.price} 원</p>
                <p className={css.immediate_purchase_price}>즉시구매가</p>
              </div>
              <div className={css.interest_figure}>
                <span className={css.wish_figure}>
                  <img
                    src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/external-Save-social-media-bearicons-detailed-outline-bearicons.png"
                    alt="관심상품"
                  />
                  <p>{productList.wish_figure}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopSearchContent;
