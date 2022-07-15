import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BeforePayment.module.scss';

function BeforePayment() {
  const location = useLocation();
  const isBuyPage = location.pathname.includes('buy');

  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];

  const moveToLastStep = () => {
    if (isBuyPage) {
      navigate(`/payment/${id}`);
    } else {
      navigate(`/settlement/${id}`);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1>
          <span className={!isBuyPage ? css.sell : undefined}>
            {isBuyPage ? '구매' : '판매'}
          </span>
          하시기 전에 꼭 확인하세요.
        </h1>
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
            <div className={css.size}>M</div>
          </div>
        </div>
        <div className={css.price_list}>
          <div className={css.buy}>
            <div className={css.title}>즉시 구매가</div>
            <div>3,800,000원</div>
          </div>
          <div className={css.sell}>
            <div className={css.title}>즉시 판매가</div>
            <div>3,800,000원</div>
          </div>
        </div>
        <button className={isBuyPage ? `${css.btn} ${css.buy_btn}` : css.btn}>
          {isBuyPage ? '즉시 구매' : '즉시 판매'}
        </button>
        <div className={css.price_now}>
          <div className={css.price_now_title}>
            즉시 {isBuyPage ? '구매' : '판매'}가
          </div>
          <div className={css.price_now_price}>3,800,000원</div>
        </div>
        {!isBuyPage ? (
          <>
            <div className={css.price_addition}>
              <div className={css.price_addition_text}>검수비</div>
              <div className={css.price_addition_price}>무료</div>
            </div>
            <div className={css.price_addition}>
              <div className={css.price_addition_text}>수수료</div>
              <div className={css.price_addition_price}>무료</div>
            </div>
            <div className={css.price_addition}>
              <div className={css.price_addition_text}>배송비</div>
              <div className={css.price_addition_price}>선불 판매자 부담</div>
            </div>
          </>
        ) : (
          <div className={`${css.price_addition} ${css.buy_addition}`}>
            <div className={css.price_addition_text}>
              총 결제금액은 다음 화면에서 계산됩니다.
            </div>
          </div>
        )}

        <div className={css.price_box}>
          <div className={css.price_box_text}>
            {isBuyPage ? '총 결제금액' : '정산 금액'}
          </div>
          <div
            className={
              isBuyPage
                ? `${css.price_box_price} ${css.buy_price}`
                : css.price_box_price
            }
          >
            {isBuyPage ? '다음 화면에서 확인' : '3,800,000원'}
          </div>
        </div>
        <button className={css.continue} onClick={moveToLastStep}>
          {isBuyPage ? '즉시 구매 계속' : '즉시 판매 계속'}
        </button>
      </div>
    </div>
  );
}

export default BeforePayment;
