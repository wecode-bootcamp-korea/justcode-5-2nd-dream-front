import React, { useEffect } from 'react';
import Banner from './Banner';
import Post from './Post';
import Slide from './Slide';
import ProductAll from './ProductAll';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
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
      <Banner />
      <Post />
      <ProductAll />
      <Slide />
    </div>
  );
}

export default Home;
