import React, { useState, useContext, useEffect } from 'react';
import css from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';
import style from '../../pages/Style/ProductAll';
import login from '../../pages/Login/Login';
import { Link } from 'react-router-dom';
import shop from '../../pages/Shop/Shop';
import mypage from '../../pages/MyPage/MyPage';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogoutToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    localStorage.removeItem('userId');
    localStorage.removeItem('profileImage');
    alert('로그아웃 되었습니다.');
    setIsLogin(false);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      console.log(isLogin);
      setIsLogin(false);
    }
  }, [isLogin]);
  console.log('local', localStorage.getItem('token'));

  return (
    <>
      <div className={css.top}>
        <div className={css.login}>
          {!isLogin && <Link to="/login">로그인</Link>}
          {isLogin && (
            <button className={css.logout} onClick={handleLogoutToken}>
              로그아웃
            </button>
          )}
        </div>
        <div className={css.mypage}>
          <Link to="/mypage">마이페이지</Link>
        </div>
        <div className={css.interest}>관심상품</div>
        <div className={css.customer_center}>고객센터</div>
      </div>
      <div className={css.second_border}>
        <div className={css.kream_log}>DREAM</div>
        <div className={css.right}>
          <div className={css.style}>
            <Link to="/style">STYLE</Link>
          </div>
          <div className={css.shop}>
            <Link to="/shop">SHOP</Link>
          </div>
          <div className={css.about}>ABOUT</div>
          <div className={css.glass}>
            <FiSearch size="30" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
