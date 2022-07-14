import React from 'react';
import css from './MyPage.module.scss';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

function MyPage() {
  return (
    <div>
      <div className={css.container}>
        <div className={css.snb_box}>
          <h2>마이 페이지</h2>
          <div className={css.snb_list}>
            <h3>쇼핑 정보</h3>
            <ul>
              <li>구매 내역</li>
              <li>판매 내역</li>
              <li>관심 상품</li>
            </ul>
          </div>
          <div className={css.snb_list}>
            <h3>내 정보</h3>
            <ul>
              <li>프로필 정보</li>
            </ul>
          </div>
        </div>
        <ProfileInfo />
      </div>
    </div>
  );
}

export default MyPage;
