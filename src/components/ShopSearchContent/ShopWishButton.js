import React, { useState, useEffect } from 'react';
import css from './ShopWishButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import BASE_URL from '../../config';

function ShopWishButton(props) {
  const { searchInfo } = props;

  const [isUpdated, setIsUpdated] = useState(false);
  const [isWished, setIsWished] = useState(undefined);
  const accesstoken = localStorage.getItem('token');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsUpdated(false);
    fetch(`${BASE_URL}/main/wish/${userId}`, {
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

  return (
    <div className={css.interest_figure}>
      <button className={css.wish_figure}>
        {isWished !== undefined && (
          <FontAwesomeIcon
            icon={faBookmark}
            className={css.bookmark}
            color={isWished ? 'black' : 'lightgray'}
          />
        )}
        <p>{searchInfo.wish === null ? 0 : searchInfo.wish}</p>
      </button>
    </div>
  );
}

export default ShopWishButton;
