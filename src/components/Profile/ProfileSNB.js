import React from 'react';
import { Link } from 'react-router-dom';
import css from './ProfileSNB.module.scss';

function ProfileSNB() {
  return (
    <div className={css.snb_box}>
      <h2>마이 페이지</h2>
      <div className={css.snb_list}>
        <h3>쇼핑 정보</h3>
        <ul>
          <Link className={css.btn_link} to="/mypage/buying">
            <li>구매 내역</li>
          </Link>
          <Link className={css.btn_link} to="/mypage/selling">
            <li>판매 내역</li>
          </Link>
          <Link className={css.btn_link} to="/mypage/wish">
            <li>관심 내역</li>
          </Link>
        </ul>
      </div>
      <div className={css.snb_list}>
        <h3>내 정보</h3>
        <ul>
          <Link className={css.btn_link} to="/mypage">
            <li>프로필 정보</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSNB;
