import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './BuyingPage.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function BuyingPage() {
  const [buyInfo, setBuyInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);

  const userId = localStorage.getItem('userId');

  // ============ 구매상품 조회
  useEffect(() => {
    setIsUpdated(false);
    fetch(`http://localhost:10010/purchasehistory/${userId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBuyInfo(data.data);
      });
  }, [userId, isUpdated]);

  return (
    <div className={css.container}>
      <ProfileSNB />
      <div className={css.content_box}>
        <div className={css.content_title_border}>
          <h3>구매 내역</h3>
        </div>

        <ul className={css.wish_list}>
          {buyInfo.map(buyInfo => {
            return (
              <li key={buyInfo.id}>
                <div className={css.wish_product_box}>
                  <div className={css.wish_product}>
                    <img src={buyInfo.url} alt="사용자이미지" />
                    <div className={css.product_detail}>
                      <p className={css.brand}>{buyInfo.name}</p>
                      <p className={css.product_name}>
                        {buyInfo.purchase_time}
                      </p>
                      <p className={css.size}>{buyInfo.size}</p>
                    </div>
                  </div>
                  <div className={css.wish_buy}>
                    <Link to={`/products/${buyInfo.product_id}`}>
                      <button className={css.buy_btn}>
                        <div className={css.text}>
                          <div className={css.buy_text}>{buyInfo.status}</div>
                          <div className={css.buy_price}>
                            <div>{buyInfo.price} 원</div>
                            <div className={css.immediately}>즉시 구매가</div>
                          </div>
                        </div>
                      </button>
                    </Link>
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

export default BuyingPage;
