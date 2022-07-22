import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Post from './Post';
import Slide from './Slide';
import ProductAll from './ProductAll';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './Home.module.scss';

function Home() {
  const navigate = useNavigate();
  const userInfo = queryString.parse(useLocation().search);
  const { email, nickname, profileImage, token, userId } = userInfo;
  const isSocialLoggedIn = useLocation().search.includes('token');
  const [justDropList, setJustDropList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [styles, setStyles] = useState([]);

  const getProducts = async () => {
    const url = 'http://localhost:10010/main';
    const response = await fetch(url, { method: 'GET' });
    const json = await response.json();
    console.log('json: ', json);
    setJustDropList(json.data[0]);
    setPopularList(json.data[1]);
    setStyles(json.data[2]);
  };
  useEffect(() => {
    getProducts();
  }, []);

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
      <div className={css.container}>
        <div className={css.productall}>
          <ProductAll data={justDropList} />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.productall}>
          <ProductAll data={popularList} />
        </div>
      </div>
      <Slide data={styles} />
    </div>
  );
}

export default Home;
