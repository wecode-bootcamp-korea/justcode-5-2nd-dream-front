import React, { useState } from 'react';
import css from './MyPage.module.scss';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function MyPage() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  return (
    <div className={css.container}>
      <ProfileSNB />
      <ProfileInfo
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
      />
    </div>
  );
}

export default MyPage;
