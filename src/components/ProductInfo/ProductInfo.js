import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import css from './ProductInfo.module.scss';
import ProductOtherInfo from '../ProductOtherInfo/ProductOtherInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import ProductModal from '../ProductModal/ProductModal';

function ProductInfo() {
  const navigate = useNavigate();
  const id = useLocation().pathname.split('/')[2];

  const [size, setSize] = useState('모든 사이즈');
  const [price, setPrice] = useState(60000);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const moveToDealCheck = deal => {
    navigate(`/${deal}/select/${id}`);
  };

  return (
    <div className={css.container}>
      <ProductModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
        price={price}
        setPrice={setPrice}
      />
      <Link to>Aurolee</Link>
      <p className={css.name}>Aurolee Small Logo T-Shirt Black</p>
      <p className={css.sub_name}>오로리 스몰 로고 티셔츠 블랙</p>
      <div className={css.size_container}>
        <span className={css.size}>사이즈</span>
        <span className={css.all_size} onClick={openModal}>
          {size}
          <FontAwesomeIcon icon={faCircleDown} className={css.circle} />
        </span>
      </div>
      <div className={css.sell_container}>
        <span className={css.recent_sell}>최근 거래가</span>
        <span className={css.price}>455,000원</span>
      </div>
      <div className={css.buttons}>
        <button className={css.buy_btn} onClick={() => moveToDealCheck('buy')}>
          <div className={css.text}>
            <div className={css.buy_text}>구매</div>
            <div className={css.buy_price}>
              <div>{price.toLocaleString()}원</div>
              <div className={css.immediately}>즉시 구매가</div>
            </div>
          </div>
        </button>
        <button
          className={css.sell_btn}
          onClick={() => moveToDealCheck('sell')}
        >
          <div className={css.text}>
            <div className={css.sell_text}>판매</div>
            <div className={css.sell_price}>
              <div>430,000원</div>
              <div className={css.immediately}>즉시 판매가</div>
            </div>
          </div>
        </button>
        <button className={css.interested}>관심상품 80</button>
      </div>
      <h3>상품 정보</h3>
      <div className={css.info_container}>
        <div className={css.info_div}>
          <div className={css.info_title}>모델번호</div>
          <div>A2379HH</div>
        </div>
        <div className={css.info_div}>
          <div className={css.info_title}>출시일</div>
          <div>-</div>
        </div>
        <div className={css.info_div}>
          <div className={css.info_title}>컬러</div>
          <div>BLACK / RED</div>
        </div>
        <div className={`${css.info_div} ${css.last}`}>
          <div className={css.info_title}>발매가</div>
          <div>120,000원</div>
        </div>
      </div>
      <ProductOtherInfo />
    </div>
  );
}

export default ProductInfo;
