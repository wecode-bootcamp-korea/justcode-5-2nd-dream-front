import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './WishPage.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function WishPage() {
  const locaction = useLocation().pathname;
  const id = locaction.substring(locaction.lastIndexOf('/') + 1);
  console.log(id);
  const [wishInfo, setwishInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);

  // ============ 관심상품 조회
  useEffect(() => {
    setIsUpdated(false);
    fetch(`http://localhost:10010/wish/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setwishInfo(data.data);
        console.log(data);
      });
  }, [id, isUpdated]);

  // ============ 관심상품 삭제
  // const [delWish, setDelWish] = useState('');
  console.log(localStorage.getItem('userId'));
  const deleteWish = (productId, productDetailId) => {
    console.log(productId);
    console.log(productDetailId);
    fetch(`http://localhost:10010/wish`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: localStorage.getItem('userId'),
        product_id: productId,
        product_detail_id: productDetailId,
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
          {/* {isUpdated && ( */}
          {wishInfo.map(wishInfo => {
            // if (wishInfo.id !== null) {
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
                    <button className={css.wish_btn}>
                      <div className={css.text}>
                        <div className={css.buy_text}>구매</div>
                        <div className={css.buy_price}>
                          <div>{wishInfo.price} 원</div>
                          <div className={css.immediately}>즉시 구매가</div>
                        </div>
                      </div>
                    </button>
                    <div>
                      <span
                        onClick={() =>
                          deleteWish(
                            wishInfo.product_id,
                            wishInfo.product_detail_id
                          )
                        }
                      >
                        삭제
                      </span>
                      {/* <span onClick={close}>삭제</span> */}
                    </div>
                  </div>
                </div>
              </li>
            );
            // } else {
            //   return null;
            // }
          })}

          {/* )} */}
        </ul>
      </div>
    </div>
  );
}

export default WishPage;
