import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BuySellPage.module.scss';

function BuySellPage() {
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const isBuyPage = location.pathname.includes('buy');
  const { sizeList, productInfo } = location.state;
  const { name, comment } = productInfo;
  const img = productInfo.images[0].product_images;
  const modelNum = productInfo.model_number;
  const userId = localStorage.getItem('userId');

  const [size, setSize] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [sellId, setSellId] = useState(undefined);
  const [productDetailId, setProductDetailId] = useState(undefined);
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSize = e => {
    const valueArr = e.target.value.split(',');
    setSize(valueArr[0]);
    setPrice(valueArr[1]);
    setSellId(Number(valueArr[2]));
    setProductDetailId(valueArr[3]);
    setIsSoldOut(valueArr[4]);
  };

  const navigate = useNavigate();
  const moveToDealCheck = () => {
    if (isBuyPage) {
      navigate(`/buy/check/${id}`, {
        state: { size, price, sellId, productDetailId, productInfo },
      });
    } else {
      navigate(`/sell/check/${id}`, {
        state: { size, price, sellId, productDetailId, productInfo },
      });
    }
  };

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
          </div>
        </div>
        <div className={css.sizes}>
          {isBuyPage
            ? sizeList
                ?.filter(s => s['sell.user_id'] !== Number(userId))
                .map(s => {
                  const isSelected = s['sell.id'] === sellId;
                  const isSoldOut = s.status === '판매완료';
                  return (
                    <button
                      className={isSelected ? css.selected : undefined}
                      onClick={handleSize}
                      value={[
                        s.size,
                        s.price,
                        s['sell.id'],
                        s.product_detail_id,
                        isSoldOut,
                        s['sell.user_id'],
                      ]}
                      key={s['sell.id']}
                    >
                      {s.size}
                      <br />
                      {s.price}
                      <br />
                      {isBuyPage ? (isSoldOut ? '판매완료' : '판매중') : null}
                    </button>
                  );
                })
            : sizeList.map(s => {
                const isSelected = s['sell.id'] === sellId;
                const isSoldOut = s.status === '판매완료';
                return (
                  <button
                    className={isSelected ? css.selected : undefined}
                    onClick={handleSize}
                    value={[
                      s.size,
                      s.price,
                      s['sell.id'],
                      s.product_detail_id,
                      isSoldOut,
                      s['sell.user_id'],
                    ]}
                    key={s['sell.id']}
                  >
                    {s.size}
                    <br />
                    {s.price}
                    <br />
                    {isBuyPage ? (isSoldOut ? '판매완료' : '판매중') : null}
                  </button>
                );
              })}
        </div>
        {isBuyPage && isSoldOut === 'false' && (
          <button className={css.price_btn} onClick={moveToDealCheck}>
            {price}
            <br />
            일반배송(5-7일소요)
          </button>
        )}
        {size !== undefined && !isBuyPage && (
          <div className={css.buttons}>
            <button className={`${css.btn} ${css.keep}`}>
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
