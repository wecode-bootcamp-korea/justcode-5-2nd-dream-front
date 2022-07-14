import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ProfileInfo.module.scss';
import SizeModal from '../../components/SizeModal/SizeModal';

function ProfileInfo() {
  const id = useLocation().pathname.split('/')[2] - 1;
  const userData = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/7b/cf/9f/7bcf9fd06731087ef9edce2a35fd2cfa.jpg',
      email: 'ssh3051004@naver.com',
      password: '1234567',
      name: '김드림',
      phone: '010-0000-1111',
      size: '240',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/photos/flat-white-knitwear-sweater-tshirt-shape-with-red-line-on-the-rim-on-picture-id1403388731?s=612x612',
      email: 'aa123@naver.com',
      password: '1234567',
      name: '이드림',
      phone: '010-0000-2222',
      size: '250',
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/photos/pullover-isolated-on-white-background-picture-id1160547812?s=612x612',
      email: 'ssh3051004@naver.com',
      password: '1234567',
      name: '박드림',
      phone: '010-0000-3333',
      size: '245',
    },
    {
      id: 4,
      image:
        'https://media.istockphoto.com/photos/blank-shirt-isolated-on-white-background-picture-id898906594?s=612x612',
      email: 'ssh3051004@naver.com',
      password: '1234567',
      name: '최드림',
      phone: '010-0000-4444',
      size: '260',
    },
  ];
  const [size, setSize] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.content_box}>
      <SizeModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
      />
      <div className={css.my_profile}>
        <div className={css.content_title_border}>
          <h3>프로필 정보</h3>
        </div>
        <div className={css.user_profile}>
          <div className={css.profile_img}>
            <img src={userData[id].image} alt="사용자이미지" />
          </div>
          <h3>{userData[id].name}</h3>
        </div>
        <div className={css.profile_info}>
          <div className={css.profile_group}>
            <h4>로그인정보</h4>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>이메일 주소</h5>
                <p>{userData[id].email}</p>
              </div>
              <button
                onClick={() =>
                  alert('소셜 로그인된 상태에서는 이메일을 변경할 수 없습니다.')
                }
              >
                변경
              </button>
            </div>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>비밀번호</h5>
                <p>●●●●●●●●●</p>
              </div>
              <button
                onClick={() =>
                  alert(
                    '소셜 로그인된 상태에서는 비밀번호를 변경할 수 없습니다.'
                  )
                }
              >
                변경
              </button>
            </div>
          </div>
          <div className={css.profile_group}>
            <h4>개인 정보</h4>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>이름</h5>
                <p>{userData[id].name}</p>
              </div>
              <button>변경</button>
            </div>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>휴대폰 번호</h5>
                <p>{userData[id].phone}</p>
              </div>
              <button>변경</button>
            </div>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>신발 사이즈</h5>
                <p>{userData[id].size}</p>
              </div>
              <button onClick={openModal}>변경</button>
            </div>
          </div>
        </div>

        <div className={css.address_group}>
          <h2>주소록</h2>
          <h4>새 주소 추가</h4>
          <div className={css.address_box}>
            <div className={css.address_info}>
              <input placeholder="주소를 입력해주세요." />
            </div>
            <button>추가</button>
          </div>
          <div className={css.divider} />
          <div className={css.add_address}>
            <p>손소희</p>
            <p>010-3371-3863</p>
            <p>가나다라마바사아자차카타파하</p>
            <div className={css.address_button}>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
