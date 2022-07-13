import React, { useState, useEffect } from 'react';
import css from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import kakao_login from '../../styles/images/kakao_login.png';

function Login() {
  const navigate = useNavigate();

  const login = e => {
    e.preventDefault();
    alert('로그인 완료!');
    navigate('/');
  };

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isValidPw, setIsValidPw] = useState(false);

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  const handlePwInput = e => {
    setPassword(e.target.value);
  };
  const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const emailValidation = () => {
    if (email.length === 0) setIsValidEmail(true);
    else {
      setIsValidEmail(regEmail.test(email));
    }
  };
  const pwValidation = () => {
    if (password.length === 0) setIsValidPw(true);
    else {
      setIsValidPw(regPw.test(password));
    }
  };

  const [loginValid, setLoginValid] = useState(false);
  const loginValidaion = () => {
    if (
      isValidEmail &&
      isValidPw &&
      email.length !== 0 &&
      password.length !== 0
    ) {
      setLoginValid(true);
    } else {
      setLoginValid(false);
    }
  };

  useEffect(() => {
    emailValidation();
    pwValidation();
    loginValidaion();
  });

  return (
    <div className={css.container}>
      <h1 className={css.logo}>
        DREAM
        <div className={css.logo_desc}>DRESS RULE EVERYTHING AROUND ME</div>
      </h1>
      <form className={css.login}>
        <label
          className={isValidEmail ? css.label : `${css.label} ${css.red}`}
          htmlFor="email"
        >
          이메일 주소
        </label>
        <input
          value={email}
          onChange={handleEmailInput}
          autoComplete="off"
          className={isValidEmail ? css.input : `${css.input} ${css.alert}`}
          name="email"
          placeholder="예) dream@dream.co.kr"
        />
        {!isValidEmail && (
          <span className={css.email_alert}>
            이메일 주소를 정확히 입력해주세요.
          </span>
        )}
        <label
          className={isValidPw ? css.label : `${css.label} ${css.red}`}
          htmlFor="password"
        >
          비밀번호
        </label>
        <input
          value={password}
          onChange={handlePwInput}
          autoComplete="off"
          className={isValidPw ? css.input : `${css.input} ${css.alert}`}
          name="password"
          type="password"
        />
        {!isValidPw && (
          <span className={css.pw_alert}>
            영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)
          </span>
        )}
        <button
          disabled={!loginValid}
          onClick={login}
          className={
            loginValid ? css.login_btn : `${css.login_btn} ${css.disabled}`
          }
        >
          로그인
        </button>
      </form>
      <div className={css.links}>
        <Link to="/signup">이메일 가입</Link>
        <Link to>이메일 찾기</Link>
        <Link to>비밀번호 찾기</Link>
      </div>
      <button className={css.kakao_btn} disabled={!loginValid}>
        <img src={kakao_login} alt="kakao_btn" />
      </button>
    </div>
  );
}

export default Login;
