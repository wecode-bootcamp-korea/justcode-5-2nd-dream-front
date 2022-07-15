import React, { useState } from 'react';
import css from './ShopSearchContent.module.scss';
import WishModal from '../../components/WishModal/WishModal';

function ShopSearchContent() {
  const productList = [
    {
      id: 1,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA3MDdfOTIg/MDAxNjU3MTc1NzI4MDg4.zWf7CeTM2krIkEjAGWwZ9IHFsXYYS4qnYkKIDF82XAIg.ncUlafetoe9O6Css7WYyaqYGgFxB3RUd3pB_V8HqzA4g.JPEG/a_18d29ef0c6a44f5fb0abb7ba48850288.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Nike',
      product_name: 'ABCDEFG',
      product_name_kor: '뽀짝뽀짝 티셔츠',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 2,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA1MDlfMjg3/MDAxNjUyMDYzMjg2MTQ2.hTfoDae0NSsDx-b4WOxmmX71AAkDrhSixKKM9yAIQgEg.-D_SS3zK1w9vh3sDGljhXYSrUhxXITFcCQvegYkBqicg.JPEG/a_eb34c9103b9c4329ab9e343c5e1f2622.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Jordan',
      product_name: 'HIJK',
      product_name_kor: '샤랄라라 드레스',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 3,
      img: 'https://kream-phinf.pstatic.net/MjAyMjAyMDNfMTYw/MDAxNjQzODcxMzk2MTA2.zZPWupn6GUlTLD537_EX9cJyRLOAtK_reoY6ISZFbsQg.sFvnfPlswZi-4TPHX55RRWRl-V1hoXN8hysD_NnQ1OEg.PNG/a_66981b26bec642f4a0f47aaad44da821.png?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'LMNO',
      product_name_kor: '짝퉁 구찌 신발',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 4,
      img: 'https://kream-phinf.pstatic.net/MjAyMjAyMDhfMjMw/MDAxNjQ0MzAyNjcwMjA1.6eiRuv9bvPQWO-WxTn5fzB1mQ6MHa6HV_BCT_ID_XKYg.AZSsjbfc-QbIoqKW_xead-um0Z6p8r3GZ2nM0Pz2J20g.PNG/a_821b33f548ab47ffb078ebfe677c326b.png?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'PQRST',
      product_name_kor: '공짜로 가져가세요 양말',
      price: 'price',
      wish_figure: '1000',
    },
    {
      id: 5,
      img: 'https://kream-phinf.pstatic.net/MjAyMjA1MTFfODEg/MDAxNjUyMjMyNzAyOTU4.CK9sEHt6biiD-iy2JH9UPX8w4gVE7NgEcK7RJ0Z1fGkg.dnsoNszWxZAp2rZDWW65_HMgXlk5-8DSdqWNkKLaKR8g.JPEG/a_99b2ba0a829b43e29bfb78825e1f47b2.jpg?type=m_webp',
      img_text: '모든 상품이미지',
      brand: 'Brand',
      product_name: 'UH',
      product_name_kor: '우투더영투더우',
      price: 'price',
      wish_figure: '1000',
    },
  ];

  const [size, setSize] = useState(undefined);
  const [productImage, setProductImage] = useState(undefined);
  const [productImageText, setProductImageText] = useState(undefined);
  const [productNameEng, setProductNameEng] = useState(undefined);
  const [productNameKor, setProductNameKor] = useState(undefined);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = id => {
    setModalOpen(true);

    const selectProduct = productList.find(it => it.id === id);

    setProductImage(selectProduct.img);
    setProductImageText(selectProduct.img_text);
    setProductNameEng(selectProduct.product_name);
    setProductNameKor(selectProduct.product_name_kor);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.search_content}>
      <WishModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
        productImage={productImage}
        productImageText={productImageText}
        productNameEng={productNameEng}
        productNameKor={productNameKor}
      />
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
                    onClick={() => openModal(productList.id)}
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
