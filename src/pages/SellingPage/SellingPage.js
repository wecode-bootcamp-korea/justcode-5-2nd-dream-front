import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './SellingPage.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function SellingPage() {
  const locaction = useLocation().pathname;
  const id = locaction.substring(locaction.lastIndexOf('/') + 1);
  console.log(id);
  const [sellInfo, setSellInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);

  // ============ 판매상품 조회
  useEffect(() => {
    setIsUpdated(false);
    fetch(`http://localhost:10010/salehistory/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSellInfo(data.data);
      });
  }, [id, isUpdated]);

  return (
    <div className={css.container}>
      <ProfileSNB />
      <div className={css.content_box}>
        <div className={css.content_title_border}>
          <h3>판매 내역</h3>
        </div>

        <ul className={css.wish_list}>
          {sellInfo.map(sellInfo => {
            return (
              <li>
                <div className={css.wish_product_box}>
                  <div className={css.wish_product}>
                    <img src={sellInfo.url} alt="사용자이미지" />
                    <div className={css.product_detail}>
                      <p className={css.brand}>{sellInfo.name}</p>
                      <p className={css.product_name}>
                        {sellInfo.purchase_time}
                      </p>
                      <p className={css.size}>{sellInfo.size}</p>
                    </div>
                  </div>
                  <div className={css.wish_buy}>
                    <button className={css.buy_btn}>
                      <div className={css.text}>
                        <div className={css.buy_text}>판매 완료</div>
                        <div className={css.buy_price}>
                          <div>{sellInfo.price} 원</div>
                          <div className={css.immediately}>즉시 구매가</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SellingPage;
