import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BuySellPage.module.scss';

function BuySellPage() {
  const location = useLocation();
  const isBuyPage = location.pathname.includes('buy');

  const id = location.pathname.split('/')[2];

  const navigate = useNavigate();

  const [size, setSize] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const sizeList = ['모든 사이즈', 'S', 'M', 'L', 'XL', 'XXL'];
  const priceList = ['-', '-', 90000, 45000, 100000, 50000, 40000];

  const handleSize = e => {
    setSize(e.target.value.split(',')[0]);
    setPrice(e.target.value.split(',')[1]);
  };

  const moveToDealCheck = deal => {
    if (isBuyPage) {
      navigate(`/buy/check/${id}`);
    } else {
      navigate(`/sell/check/${id}`);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.content_top}>
          <div className={css.image}>
            <img
              src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
              alt="product_img"
            />
          </div>
          <div className={css.text}>
            <div>B6047317</div>
            <div>Aurolee Small Logo T-Shirt Black</div>
            <div className={css.kr_name}>오로리 스몰 로고 티셔츠 블랙</div>
          </div>
        </div>
        <div className={css.sizes}>
          {sizeList?.map((s, idx) => {
            const isSelected = s === size;
            return (
              <button
                className={isSelected ? css.selected : undefined}
                onClick={handleSize}
                value={[s, priceList[idx]]}
                key={s}
              >
                {s}
                <br />
                {priceList[idx]}
              </button>
            );
          })}
        </div>
        {size !== undefined && isBuyPage && (
          <button className={css.price_btn} onClick={moveToDealCheck}>
            {price}
            <br />
            일반배송(5-7일소요)
          </button>
        )}
        {size !== undefined && !isBuyPage && (
          <div className={css.buttons}>
            <button
              className={css.btn}
              onClick={() => alert('지원하지 않는 기능입니다.')}
            >
              보관 신청
              <br />
              선불발송
            </button>
            <button
              className={`${css.btn} ${css.green}`}
              onClick={moveToDealCheck}
            >
              {price}
              <br />
              선불발송
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuySellPage;
