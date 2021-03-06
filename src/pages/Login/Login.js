import React, { useState, useEffect } from 'react';
import css from './Login.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kakao_login from './images/kakao_login.png';
import BASE_URL from '../../config';
import useToast from '../../hooks/useToast';
import Toast from '../../components/Toast/Toast';

function Login(props) {
  const { setIsLogin } = props;
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const login = e => {
    e.preventDefault();
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', email);
          localStorage.setItem('userId', res.id);
          setIsLogin(true);
          setLoginState(true);
        } else {
          setInvalidState(true);
        }
      });
  };

  const [email, setEmail] = useState('');
  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePwInput = e => {
    setPassword(e.target.value);
  };

  const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const [isValidEmail, setIsValidEmail] = useState(false);
  const emailValidation = () => {
    if (email.length === 0) setIsValidEmail(true);
    else if (regEmail.test(email) && !/[0-9]/g.test(email.split('.')[1])) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const [isValidPw, setIsValidPw] = useState(false);
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

  const isLoginPage = useLocation().pathname.includes('login');
  useEffect(() => {
    if (isLoginPage && isLoggedIn) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else if (isLoggedIn) navigate('/');
  }, [isLoginPage, isLoggedIn, navigate]);

  const [invalidState, setInvalidState] = useState(false);
  useToast(invalidState, setInvalidState);

  const [loginState, setLoginState] = useState(false);
  useToast(loginState, setLoginState);

  return (
    <div className={css.container}>
      {loginState && <Toast message="???????????? ?????????????????????." />}
      {invalidState && <Toast message="????????? ?????????????????? ?????????????????????." />}
      <h1 className={css.logo}>
        DREAM
        <div className={css.logo_desc}>DRESS RULE EVERYTHING AROUND ME</div>
      </h1>
      <form className={css.login}>
        <label
          className={isValidEmail ? css.label : `${css.label} ${css.red}`}
          htmlFor="email"
        >
          ????????? ??????
        </label>
        <input
          value={email}
          onChange={handleEmailInput}
          autoComplete="off"
          className={isValidEmail ? css.input : `${css.input} ${css.alert}`}
          name="email"
          placeholder="???) dream@dream.co.kr"
        />
        {!isValidEmail && (
          <span className={css.email_alert}>
            ????????? ????????? ????????? ??????????????????.
          </span>
        )}
        <label
          className={isValidPw ? css.label : `${css.label} ${css.red}`}
          htmlFor="password"
        >
          ????????????
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
            ??????, ??????, ??????????????? ???????????? ??????????????????. (8-16???)
          </span>
        )}
        <button
          disabled={!loginValid}
          onClick={login}
          className={
            loginValid ? css.login_btn : `${css.login_btn} ${css.disabled}`
          }
        >
          ?????????
        </button>
      </form>
      <div className={css.links}>
        <Link to="/signup">????????? ??????</Link>
        <Link to className={css.disabled}>
          ????????? ??????
        </Link>
        <Link to className={css.disabled}>
          ???????????? ??????
        </Link>
      </div>
      <a className={css.kakao_btn} href={`${BASE_URL}/kakao`}>
        <img src={kakao_login} alt="kakao_btn" />
      </a>
    </div>
  );
}

export default Login;
