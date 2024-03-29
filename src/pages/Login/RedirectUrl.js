import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import queryString from 'query-string';

const RedirectURI = props => {
  const navigate = useNavigate();
  const userInfo = queryString.parse(useLocation().search);
  const { email, nickname, profileImage, token, userId } = userInfo;
  const isSocialLoggedIn = useLocation().search.includes('token');

  useEffect(() => {
    if (isSocialLoggedIn) {
      localStorage.setItem('email', email);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('profileImage', profileImage);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      navigate('/');
    }
  }, [
    email,
    nickname,
    profileImage,
    token,
    userId,
    isSocialLoggedIn,
    navigate,
  ]);

  return (
    <div>
      <Spinner radius={120} color={'#6267C4'} stroke={2} visible={true} />
    </div>
  );
};

export default RedirectURI;
