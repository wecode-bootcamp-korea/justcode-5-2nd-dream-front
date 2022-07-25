import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './WishPage.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';
import BASE_URL from '../../config';

function WishPage() {
  const [wishInfo, setwishInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const userId = localStorage.getItem('userId');

  // ============ 관심상품 조회
  useEffect(() => {
    setIsUpdated(false);
    fetch(`${BASE_URL}/wish/${userId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setwishInfo(data.data);
      });
  }, [userId, isUpdated]);
  // console.log(wishInfo[0].product_id);

  // ============ 관심상품 삭제
  const deleteWish = productId => {
    fetch(`${BASE_URL}/wish`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: localStorage.getItem('userId'),
        product_id: productId,
      }),
    })
      .then(alert('삭제가 완료되었습니다.'))
      .then(setIsUpdated(true));
  };

  return (
    <div className={css.container}>
      <ProfileSNB />
      <div className={css.content_box}>
        <div className={css.content_title_border}>
          <h3>관심상품</h3>
        </div>

        <ul className={css.wish_list}>
          {wishInfo.map(wishInfo => {
            return (
              <li key={wishInfo.id}>
                <div className={css.wish_product_box}>
                  <div className={css.wish_product}>
                    <img src={wishInfo.product_image} alt="사용자이미지" />
                    <div className={css.product_detail}>
                      <p className={css.brand}>{wishInfo.brand}</p>
                      <p className={css.product_name}>{wishInfo.name}</p>
                      <p className={css.size}>{wishInfo.size}</p>
                    </div>
                  </div>
                  <div className={css.wish_buy}>
                    <Link to={`/products/${wishInfo.product_id}`}>
                      <button className={css.wish_btn}>
                        <div className={css.text}>
                          <div className={css.buy_text}>구매</div>
                          <div className={css.buy_price}>
                            <div>{wishInfo.price} 원</div>
                            <div className={css.immediately}>즉시 구매가</div>
                          </div>
                        </div>
                      </button>
                    </Link>
                    <div>
                      <span onClick={() => deleteWish(wishInfo.product_id)}>
                        삭제
                      </span>
                    </div>
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

export default WishPage;
