import React from 'react';
import css from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';
import stal from '../../pages/stal/Button';
import login from '../../pages/Login/Login';
import mypage from '../../pages/MyPage/MyPage';
import { Link } from 'react-router-dom';

// test
function Header() {
  return (
    <>
      <div className={css.top}>
        <div className={css.login}>
          <Link to="/login">로그인</Link>
        </div>
        <div className={css.mypage}>
          <Link to="/mypage">마이페이지</Link>
        </div>
        <div className={css.interest}>관심상품</div>
        <div className={css.customer_center}>고객센터</div>
      </div>
      <div className={css.second_border}>
        <div className={css.kream_log}>DREAM</div>
        <div className={css.style}>
          <Link to="/stal">STYLE</Link>
        </div>
        <div className={css.shop}>SHOP</div>
        <div className={css.about}>ABOUT</div>
        <div className={css.glass}>
          <FiSearch size="35" />
        </div>
      </div>
    </>
  );
}

export default Header;
