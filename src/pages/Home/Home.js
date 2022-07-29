import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Post from './Post';
import Slide from './Slide';
import ProductAll from './ProductAll';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './Home.module.scss';
import BASE_URL from '../../config';

function Home() {
  const navigate = useNavigate();
  const userInfo = queryString.parse(useLocation().search);
  const { email, nickname, profileImage, token, userId } = userInfo;
  const isSocialLoggedIn = useLocation().search.includes('token');
  const [justDropList, setJustDropList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [styles, setStyles] = useState([]);
  const accessToken = localStorage.getItem('token');

  console.log(accessToken, '234');

  const getProducts = async () => {
    const url = `${BASE_URL}/main`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    });
    const json = await response.json();
    console.log('json: ', json);
    setJustDropList(json.data[0]);
    setPopularList(json.data[1]);
    setStyles(json.data[2]);
  };

  // const getWishs = async userId => {
  //   const url = `${BASE_URL}/main/wish/${userId}`;
  //   const res = await fetch(url,{method : 'GET'});
  //   const json = await res.json();
  //   console.log('wish : ', json)

  // };
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
          <ProductAll data={justDropList} title="Just Dropped" displayNum="8" />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.productall}>
          <ProductAll data={popularList} title="Most Popular" displayNum="8" />
        </div>
      </div>
      <Slide data={styles} displayNum="12" />
    </div>
  );
}

export default Home;
