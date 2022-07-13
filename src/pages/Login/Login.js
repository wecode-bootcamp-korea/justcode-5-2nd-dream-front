import React from 'react';
import css from './Login.module.scss';
import { Link } from 'react-router-dom';
import kakao_login from '../../styles/images/kakao_login.png';

function Login() {
  const login = e => {
    e.preventDefault();
  };

  return (
    <div className={css.container}>
      <h1 className={css.logo}>
        DREAM
        <div className={css.logo_desc}>DRESS RULE EVERYTHING AROUND ME</div>
      </h1>
      <form className={css.login}>
        <label className={css.label} htmlFor="email">
          이메일 주소
        </label>
        <input
          className={css.input}
          name="email"
          placeholder="예) dream@dream.co.kr"
        />
        <label className={css.label} htmlFor="password">
          비밀번호
        </label>
        <input className={css.input} name="password" type="password" />
        <button onClick={login}>로그인</button>
      </form>
      <div className={css.links}>
        <Link to="/signup">이메일 가입</Link>
        <Link to>이메일 찾기</Link>
        <Link to>비밀번호 찾기</Link>
      </div>
      <button className={css.kakao_btn}>
        <img src={kakao_login} alt="kakao_btn" />
      </button>
    </div>
  );
}

export default Login;
