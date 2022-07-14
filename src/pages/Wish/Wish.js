import React from 'react';
import css from './Wish.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function Wish() {
  return (
    <div className={css.container}>
      <ProfileSNB />
      <div className={css.content_box}>
        <div className={css.content_title_border}>
          <h3>관심상품</h3>
        </div>
      </div>
    </div>
  );
}

export default Wish;
