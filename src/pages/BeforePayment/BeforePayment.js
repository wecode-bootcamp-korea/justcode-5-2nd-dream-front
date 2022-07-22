import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BeforePayment.module.scss';

function BeforePayment() {
  const location = useLocation();
  const isBuyPage = location.pathname.includes('buy');
  const { size, price, sellId, productDetailId } = location.state;

  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];

  const [bidPrice, setBidPrice] = useState(0);

  const moveToLastStep = () => {
    if (bidPrice < Number(price) && isBid) {
      setIsBid(false);
    } else if (isBuyPage) {
      navigate(`/payment/${id}`, {
        state: { price, size, sellId },
      });
    } else if (isBid) {
      navigate(`/settlement/${id}`, {
        state: { price: bidPrice, size, sellId, productDetailId },
      });
    } else {
      navigate(`/settlement/${id}`, {
        state: { price, size, sellId, productDetailId },
      });
    }
  };

  const [isBid, setIsBid] = useState(false);

  const bidBtn = check => {
    setIsBid(check);
  };

  const handleInput = e => {
    if (bidPrice?.length > 9) {
      setBidPrice(e.target.value.slice(0, 10));
    } else {
      setBidPrice(e.target.value);
    }
  };

  const [isValid, setIsValid] = useState(false);
  const isThousandUnits =
    String(bidPrice)?.slice(bidPrice?.length - 3, bidPrice?.length) === '000';
  const valid = () => {
    if (isBid && bidPrice >= 30000 && isThousandUnits) {
      setIsValid(true);
    } else if (!isBid && price !== undefined) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    valid();
  });

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
            <div className={css.size}>{size}</div>
          </div>
        </div>
        <div className={css.price_list}>
          <div className={css.buy}>
            <div className={css.title}>즉시 구매가</div>
            <div>{price?.toLocaleString()}원</div>
          </div>
          <div className={css.sell}>
            <div className={css.title}>즉시 판매가</div>
            <div>{price?.toLocaleString()}원</div>
          </div>
        </div>
        {!isBuyPage && (
          <div className={css.sell_tab}>
            <button
              className={isBid ? `${css.sell_btn} ${css.active}` : css.sell_btn}
              onClick={() => bidBtn(true)}
            >
              판매 입찰
            </button>
            <button
              className={
                !isBid ? `${css.sell_btn} ${css.active}` : css.sell_btn
              }
              onClick={() => bidBtn(false)}
            >
              즉시 판매
            </button>
          </div>
        )}

        {isBuyPage && (
          <button className={`${css.btn} ${css.buy_btn}`}>즉시 구매</button>
        )}
        <div
          className={
            !isValid && price !== 0
              ? `${css.price_now} ${css.price_red}`
              : css.price_now
          }
        >
          <div
            className={
              !isValid && price !== 0
                ? `${css.price_now_title} ${css.red}`
                : css.price_now_title
            }
          >
            {isBid ? '판매 희망가' : isBuyPage ? '즉시 구매가' : '즉시 판매가'}
          </div>
          <div className={css.price_now_price}>
            {!isValid && price !== 0 && <p>3만원 부터 천원단위로 입력하세요</p>}
            {isBid ? (
              <input
                placeholder="희망가 입력"
                type="number"
                value={bidPrice || ''}
                onChange={handleInput}
              />
            ) : isBuyPage ? (
              price?.toLocaleString()
            ) : (
              price?.toLocaleString()
            )}
            원
          </div>
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
            {isBuyPage
              ? '다음 화면에서 확인'
              : isBid
              ? Number(bidPrice)?.toLocaleString() + '원'
              : price?.toLocaleString() + '원'}
          </div>
        </div>
        <button
          className={isValid ? css.continue : `${css.continue} ${css.disabled}`}
          onClick={moveToLastStep}
          disabled={!isValid}
        >
          {isBuyPage
            ? '즉시 구매 계속'
            : isBid
            ? '판매 입찰 계속'
            : '즉시 판매 계속'}
        </button>
      </div>
    </div>
  );
}

export default BeforePayment;
