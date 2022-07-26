import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BeforePayment.module.scss';

function BeforePayment() {
  const location = useLocation();
  const isBuyPage = location.pathname.includes('buy');
  const { size, price, sellId, productDetailId, productInfo } = location.state;
  const { name, comment } = productInfo;
  const modelNum = productInfo.model_number;
  const img = productInfo.images[0].product_images;

  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];
  const [bidPrice, setBidPrice] = useState(0);
  const moveToLastStep = () => {
    if (bidPrice < Number(price) && isBid) {
      setIsBid(false);
    } else if (isBuyPage) {
      navigate(`/payment/${id}`, {
        state: { price, size, sellId, productInfo },
      });
    } else if (isBid) {
      navigate(`/settlement/${id}`, {
        state: { price: bidPrice, size, sellId, productDetailId, productInfo },
      });
    } else {
      navigate(`/settlement/${id}`, {
        state: { price, size, sellId, productDetailId, productInfo },
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

  const [isBidValid, setIsBidValid] = useState(false);
  const isThousandUnits =
    String(bidPrice)?.slice(bidPrice?.length - 3, bidPrice?.length) === '000';
  const bidValid = () => {
    if (bidPrice >= 30000 && isThousandUnits) {
      setIsBidValid(true);
    } else {
      setIsBidValid(false);
    }
  };

  const [isValid, setIsValid] = useState(false);
  const valid = () => {
    if (isBid && isBidValid && bidPrice !== 0) {
      setIsValid(true);
    } else if (!isBid && price !== undefined) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    bidValid();
    valid();
  });

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.content_top}>
          <div className={css.image}>
            <img src={img} alt="product_img" />
          </div>
          <div className={css.text}>
            <div>{modelNum}</div>
            <div>{name}</div>
            <div className={css.kr_name}>{comment}</div>
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
            isBid && !isBidValid && bidPrice !== 0 && bidPrice !== ''
              ? `${css.price_now} ${css.price_red}`
              : css.price_now
          }
        >
          <div
            className={
              isBid && !isBidValid && bidPrice !== 0 && bidPrice !== ''
                ? `${css.price_now_title} ${css.red}`
                : css.price_now_title
            }
          >
            {isBid ? '판매 희망가' : isBuyPage ? '즉시 구매가' : '즉시 판매가'}
          </div>
          <div className={css.price_now_price}>
            {isBid && !isBidValid && bidPrice !== 0 && bidPrice !== '' && (
              <p>3만원 부터 천원단위로 입력하세요</p>
            )}
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
