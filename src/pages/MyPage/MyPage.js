import React from 'react';
import css from './MyPage.module.scss';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function MyPage() {
  return (
    <div className={css.container}>
      <ProfileSNB />
      <ProfileInfo />
    </div>
  );
}

export default MyPage;
