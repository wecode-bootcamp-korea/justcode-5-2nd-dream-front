import React from 'react';
import css from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';

function Header() {
  return (
    <>
      <div className={css.top}>
        <div className={css.login}>로그인</div>
        <div className={css.mypage}>마이페이지</div>
        <div className={css.interest}>관심상품</div>
        <div className={css.customer_center}>고객센터</div>
      </div>
      <div className={css.second_border}>

        <div className={css.kream_log}>
          DREAM
        </div>
        <div className={css.style}>
          STYLE
        </div>
        <div className={css.shop}>
          SHOP
        </div>
        <div className={css.about}>
          ABOUT
        </div>

        <div className={css.glass}>
          <FiSearch size="35" />
        </div>
      </div>
    </>
  );
}

export default Header;
