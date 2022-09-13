import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Post from './Post';
import Slide from './Slide';
import ProductAll from './ProductAll';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './Home.module.scss';
import { BASE_URL } from '../../config';
import dayjs from 'dayjs';

function Home() {
  const [justDropList, setJustDropList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [styles, setStyles] = useState([]);
  let accessToken = localStorage.getItem('token');
  const exp = localStorage.getItem('exp');
  const now = dayjs();

  const getProducts = async () => {
    try {
      if (exp <= now.format()) {
        accessToken = null;
        localStorage.clear();
      }
      const url = `${BASE_URL}/main`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: accessToken,
        },
      });
      const json = await response.json();
      setJustDropList(json.data[0]);
      setPopularList(json.data[1]);
      setStyles(json.data[2]);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
