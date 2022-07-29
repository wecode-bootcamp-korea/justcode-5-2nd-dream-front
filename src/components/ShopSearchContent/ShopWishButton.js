import React, { useState, useEffect } from 'react';
import css from './ShopWishButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import BASE_URL from '../../config';

function ShopWishButton(props) {
  const { searchInfo, setIsUpdated, isUpdated } = props;

  // const [isUpdated, setIsUpdated] = useState(false);
  const [isWished, setIsWished] = useState();
  const userId = localStorage.getItem('userId');
  const accesstoken = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const accesstoken = localStorage.getItem('token');
    setIsUpdated(false);
    fetch(`${BASE_URL}/wish`, {
      method: 'GET',
      headers: { Authorization: accesstoken },
    })
      .then(res => res.json())
      .then(data => {
        const wishLength = data.data.filter(
          wishInfo => wishInfo.product_id === Number(searchInfo.id)
        ).length;
        if (wishLength !== 0) {
          setIsWished(true);
        } else if (wishLength === 0) {
          setIsWished(false);
        }
      });
  }, [isUpdated, isWished, searchInfo.id]);

  const toggleWish = method => {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accesstoken,
      },
      body: JSON.stringify({
        product_id: searchInfo.id,
      }),
    };
  };

  const wish = () => {
    if (!userId) {
      navigate('/login');
    } else if (!isWished) {
      fetch(`${BASE_URL}/wish`, toggleWish('POST'))
        .then(setIsWished(true))
        .then(setIsUpdated(true));
    } else {
      fetch(`${BASE_URL}/wish`, toggleWish('DELETE'))
        .then(setIsWished(true))
        .then(setIsUpdated(true));
    }
  };

  return (
    <div className={css.interest_figure}>
      <button className={css.wish_figure} onClick={wish}>
        <FontAwesomeIcon
          icon={faBookmark}
          className={css.bookmark}
          color={isWished ? 'black' : 'lightgray'}
        />
        <p>{searchInfo.wish === null ? 0 : searchInfo.wish}</p>
      </button>
    </div>
  );
}

export default ShopWishButton;
