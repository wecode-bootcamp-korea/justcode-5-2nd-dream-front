import React, { useEffect, useState } from 'react';
import css from './Signup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import SizeModal from '../../components/SizeModal/SizeModal';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../config';

function Signup() {
  const [email, setEmail] = useState('');
  const handleEmailInput = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handlePwInput = e => setPassword(e.target.value);

  const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const [isValidEmail, setIsValidEmail] = useState(false);
  const emailValidation = () => {
    if (email.length === 0) setIsValidEmail(true);
    else if (regEmail.test(email) && !/[0-9]/g.test(email.split('.')[1])) {
      setIsValidEmail(true);
    } else setIsValidEmail(false);
  };

  const [isValidPw, setIsValidPw] = useState(false);
  const pwValidation = () => {
    if (password.length === 0) setIsValidPw(true);
    else setIsValidPw(regPw.test(password));
  };

  const [isEssentialOpen, setIsEssentialOpen] = useState(false);
  const [isOptionalOpen, setIsOptionalOpen] = useState(false);
  const essentialBtn = e => {
    e.preventDefault();
    setIsEssentialOpen(!isEssentialOpen);
  };
  const optionalBtn = e => {
    e.preventDefault();
    setIsOptionalOpen(!isOptionalOpen);
  };

  const [isEssentialCheck, setIsEssentialCheck] = useState(false);
  const essentialCheckBtn = e => {
    setIsEssentialCheck(!isEssentialCheck);
    if (!isEssentialCheck) {
      setIsTermsCheck(true);
      setIsInfoCheck(true);
    } else {
      setIsTermsCheck(false);
      setIsInfoCheck(false);
    }
  };

  const [isOptionalCheck, setIsOptionalCheck] = useState(false);
  const optionalCheckBtn = () => {
    setIsOptionalCheck(!isOptionalCheck);
    if (!isOptionalCheck) {
      setIsAppCheck(true);
      setIsSmsCheck(true);
      setIsEmailCheck(true);
    } else {
      setIsAppCheck(false);
      setIsSmsCheck(false);
      setIsEmailCheck(false);
    }
  };

  const [isTermsCheck, setIsTermsCheck] = useState(false);
  const [isInfoCheck, setIsInfoCheck] = useState(false);

  const termsCheckBtn = () => {
    setIsTermsCheck(!isTermsCheck);
    if (isTermsCheck) setIsEssentialCheck(false);
    else if (!isTermsCheck && isInfoCheck) setIsEssentialCheck(true);
  };

  const infoCheckBtn = () => {
    setIsInfoCheck(!isInfoCheck);
    if (isInfoCheck) setIsEssentialCheck(false);
    else if (isTermsCheck && !isInfoCheck) setIsEssentialCheck(true);
  };

  const [isAppCheck, setIsAppCheck] = useState(false);
  const appCheckBtn = () => {
    setIsAppCheck(!isAppCheck);
    if (isAppCheck) setIsOptionalCheck(false);
    else if (!isAppCheck && isSmsCheck && isEmailCheck)
      setIsOptionalCheck(true);
  };

  const [isSmsCheck, setIsSmsCheck] = useState(false);
  const smsCheckBtn = () => {
    setIsSmsCheck(!isSmsCheck);
    if (isSmsCheck) setIsOptionalCheck(false);
    else if (isAppCheck && !isSmsCheck && isEmailCheck)
      setIsOptionalCheck(true);
  };

  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const emailCheckBtn = () => {
    setIsEmailCheck(!isEmailCheck);
    if (isEmailCheck) setIsOptionalCheck(false);
    else if (isAppCheck && isSmsCheck && !isEmailCheck)
      setIsOptionalCheck(true);
  };

  const [signupValid, setSignupValid] = useState(false);
  const signupValidaion = () => {
    if (
      isValidEmail &&
      isValidPw &&
      isEssentialCheck &&
      email.length !== 0 &&
      password.length !== 0
    ) {
      setSignupValid(true);
    } else setSignupValid(false);
  };

  const navigate = useNavigate();
  const signup = e => {
    e.preventDefault();
    fetch(`${BASE_URL}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'EXISTING_USER') {
          alert('이미 사용 중인 이메일입니다.');
        } else {
          alert('회원가입을 축하드립니다.');
          navigate('/login');
        }
      });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    emailValidation();
    pwValidation();
    signupValidaion();
  });

  const [size, setSize] = useState(undefined);

  return (
    <div className={css.container}>
      <SizeModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
      />
      <h1 className={css.logo}>회원가입</h1>
      <form className={css.signup}>
        <label
          className={isValidEmail ? css.label : `${css.label} ${css.red}`}
          htmlFor="email"
        >
          이메일 주소*
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
          비밀번호*
        </label>
        <input
          value={password}
          onChange={handlePwInput}
          autoComplete="off"
          className={isValidPw ? css.input : `${css.input} ${css.alert}`}
          name="password"
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 8 - 16자"
        />
        {!isValidPw && (
          <span className={css.pw_alert}>
            영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)
          </span>
        )}
        <label className={css.label} htmlFor="size">
          신발 사이즈
        </label>
        <input
          autoComplete="off"
          className={`${css.input} ${css.size}`}
          name="size"
          type="text"
          placeholder="선택하세요"
          value={size || ''}
          readOnly
          onClick={openModal}
        />
        <div className={css.agree}>
          <div className={css.agree_essential}>
            <input
              className={css.check}
              name="essential_agree"
              type="checkbox"
              checked={isEssentialCheck}
              onChange={essentialCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="essential_agree"
              onClick={essentialCheckBtn}
            >
              [필수] 만 14세 이상이며 모두 동의합니다.
            </label>
          </div>
          <button className={css.btn} onClick={essentialBtn}>
            <FontAwesomeIcon icon={isEssentialOpen ? faMinus : faPlus} />
          </button>
        </div>
        <div className={isEssentialOpen ? css.open : css.close}>
          <div className={css.agree_essential}>
            <input
              className={css.check}
              name="essential_terms_agree"
              type="checkbox"
              checked={isTermsCheck}
              onChange={termsCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="essential_terms_agree"
              onClick={termsCheckBtn}
            >
              이용약관 동의
            </label>
          </div>
          <div className={css.agree_essential}>
            <input
              className={css.check}
              name="essential_info_agree"
              type="checkbox"
              checked={isInfoCheck}
              onChange={infoCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="essential_info_agree"
              onClick={infoCheckBtn}
            >
              개인정보 수집 및 이용 동의
            </label>
          </div>
        </div>
        <div className={css.agree}>
          <div className={css.agree_optional}>
            <input
              className={css.check}
              name="optional_agree"
              type="checkbox"
              checked={isOptionalCheck}
              onChange={optionalCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="optional_agree"
              onClick={optionalCheckBtn}
            >
              [선택] 광고성 정보 수신에 모두 동의합니다.
            </label>
          </div>
          <button className={css.btn} onClick={optionalBtn}>
            <FontAwesomeIcon icon={isOptionalOpen ? faMinus : faPlus} />
          </button>
        </div>
        <div className={isOptionalOpen ? css.open : css.close}>
          <div className={css.agree_optional}>
            <input
              className={css.check}
              name="optional_app_agree"
              type="checkbox"
              checked={isAppCheck}
              onChange={appCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="optional_app_agree"
              onClick={appCheckBtn}
            >
              앱 푸시
            </label>
          </div>
          <div className={css.agree_optional}>
            <input
              className={css.check}
              name="optional_sms_agree"
              type="checkbox"
              checked={isSmsCheck}
              onChange={smsCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="optional_sms_agree"
              onClick={smsCheckBtn}
            >
              문자 메시지
            </label>
          </div>
          <div className={css.agree_optional}>
            <input
              className={css.check}
              name="optional_email_agree"
              type="checkbox"
              checked={isEmailCheck}
              onChange={emailCheckBtn}
            />
            <label
              className={css.label}
              htmlFor="optional_email_agree"
              onClick={emailCheckBtn}
            >
              이메일
            </label>
          </div>
        </div>
        <button
          disabled={!signupValid}
          className={
            signupValid ? css.signup_btn : `${css.signup_btn} ${css.disabled}`
          }
          onClick={signup}
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Signup;
