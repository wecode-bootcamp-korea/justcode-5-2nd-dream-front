import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './MyPage.module.scss';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function MyPage() {
  const id = useLocation().pathname.split('/')[2];
  const [profileInfo, setProfileInfo] = useState([]);
  return (
    <div className={css.container}>
      <ProfileSNB />
      <ProfileInfo
        profileInfo={profileInfo}
        id={id}
        setProfileInfo={setProfileInfo}
      />
    </div>
  );
}

export default MyPage;
