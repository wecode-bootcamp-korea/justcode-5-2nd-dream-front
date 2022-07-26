import React, { useState, useRef, useEffect } from 'react';
import css from './ProfileInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../config';
// import SizeModal from '../../components/SizeModal/SizeModal';

function ProfileInfo(props) {
  const { profileInfo, setProfileInfo, isUpdated, setIsUpdated } = props;
  const navigate = useNavigate();
  const gotomain = () => {
    navigate('/');
  };
  const userId = localStorage.getItem('userId');
  //============ 프로필 조회
  useEffect(() => {
    setIsUpdated(false);
    fetch(`${BASE_URL}/mypage/${userId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProfileInfo(data.data[0]);
      });
  }, [userId, setProfileInfo, isUpdated, setIsUpdated]);

  //============ 프로필 주소 등록
  const writeAddressBtn = () => {
    if (profileInfo.name === null || profileInfo.phone === null) {
      alert('이름과 전화번호를 모두 입력해주세요.');
    } else if (addressinput.length < 1) {
      alert('주소를 정확히 입력해주세요.');
    } else {
      fetch(`${BASE_URL}/address/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: addressinput,
        }),
      }).then(setIsUpdated(true));
    }
  };

  //============ 회원탈퇴
  const deleteUser = () => {
    fetch(`${BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    })
      .then(alert('삭제가 완료되었습니다.'))
      .then(setIsUpdated(true))
      .then(() => {
        gotomain();
      });
  };

  //============ 프로필 주소 삭제
  const deleteAddress = id => {
    console.log(id);
    fetch(`${BASE_URL}/address/${id}`, {
      method: 'DELETE',
    })
      .then(alert('삭제가 완료되었습니다.'))
      .then(setIsUpdated(true));
  };

  //============ 프로필 주소 수정
  const [text, setText] = useState();
  const handleTextarea = e => {
    setText(e.target.value);
  };
  const editAddressBtn = id => {
    fetch(`${BASE_URL}/address/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address: text,
      }),
    })
      .then(res => res.json())
      .then(closeAddress)
      .then(setIsUpdated(true));
  };

  //============ 프로필 이름 수정
  const [nameOpened, setNameOpened] = useState(false);

  function openName() {
    setNameOpened(true);
  }
  function closeName() {
    setNameOpened(false);
  }

  const [textName, setTextName] = useState();
  const handleNamearea = e => {
    setTextName(e.target.value);
  };
  const editNameBtn = () => {
    fetch(`${BASE_URL}/mypage/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: textName,
      }),
    })
      .then(res => res.json())
      .then(closeName)
      .then(setIsUpdated(true));
  };

  //============ 프로필 휴대폰 번호 수정
  const [phoneOpened, setPhoneOpened] = useState(false);

  function openPhone() {
    setPhoneOpened(true);
  }
  function closePhone() {
    setPhoneOpened(false);
  }

  const [textPhone, setTextPhone] = useState();
  const handlePhonearea = e => {
    setTextPhone(e.target.value);
  };
  const editPhoneBtn = () => {
    fetch(`${BASE_URL}/phone/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: textPhone,
      }),
    })
      .then(res => res.json())
      .then(closePhone)
      .then(setIsUpdated(true));
  };

  //============ 주소 추가 부분
  const [addressinput, setAddressInput] = useState('');
  const [lists, setLists] = useState([]);
  const [nextId, setNextId] = useState(0);
  const inputAddress = useRef(null);

  const changeAddress = e => {
    setAddressInput(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    const about_lists = lists.concat({
      id: nextId,
      text: addressinput,
    });
    setNextId(nextId + 1);
    setLists(about_lists);
    setAddressInput('');
  };

  const [addressOpened, setAddressOpened] = useState(false);

  function openAddress(userId) {
    setAddressOpened(userId);
  }

  function closeAddress() {
    setAddressOpened(false);
  }

  return (
    <div className={css.my_profile_box}>
      <div className={css.content_title_border}>
        <h3>프로필 정보</h3>
      </div>
      <div className={css.user_profile}>
        <div className={css.profile_img}>
          {profileInfo.image === null ? (
            <img
              src="https://kream.co.kr/_nuxt/img/blank_profile.4347742.png"
              alt="사용자이미지"
            />
          ) : (
            <img src={profileInfo?.image} alt="사용자이미지" />
          )}
        </div>
        <h3>{profileInfo?.name}</h3>
      </div>
      <div className={css.profile_info}>
        <div className={css.profile_group}>
          <h4>로그인정보</h4>
          <div className={css.user_info_box}>
            <div className={css.user_info_fill_out}>
              <h5>이메일 주소</h5>
              <p>{profileInfo?.email}</p>
            </div>
          </div>
          <div className={css.user_info_box}>
            <div className={css.user_info_fill_out}>
              <h5>비밀번호</h5>
              <p>●●●●●●●●●●</p>
            </div>
            <button
              onClick={() =>
                alert('소셜 로그인된 상태에서는 비밀번호를 변경할 수 없습니다.')
              }
            >
              변경
            </button>
          </div>
        </div>
        <div className={css.profile_group}>
          <h4>개인 정보</h4>

          {!nameOpened && (
            <div className={css.user_info_box}>
              <div className={css.user_info_fill_out}>
                <h5>이름</h5>
                <p>{profileInfo?.name} </p>
              </div>
              <button onClick={openName}>변경</button>
            </div>
          )}
          {nameOpened && (
            <div className={css.user_info_box}>
              <div className={css.user_info_fill_out}>
                <h5>새로운 이름</h5>
                <input
                  name="name"
                  type="text"
                  placeholder="고객님의 이름을 작성해주세요."
                  value={textName}
                  onChange={handleNamearea}
                />
              </div>
              <button onClick={editNameBtn}>저장</button>
            </div>
          )}

          {!phoneOpened && (
            <div className={css.user_info_box}>
              <div className={css.user_info_fill_out}>
                <h5>휴대폰 번호</h5>
                <p>{profileInfo?.phone} </p>
              </div>
              <button onClick={openPhone}>변경</button>
            </div>
          )}
          {phoneOpened && (
            <div className={css.user_info_box}>
              <div className={css.user_info_fill_out}>
                <h5>새로운 휴대폰 번호</h5>
                <input
                  name="phone"
                  type="text"
                  placeholder="고객님의 전화번호를 작성해주세요."
                  value={textPhone}
                  onChange={handlePhonearea}
                />
              </div>
              <button onClick={editPhoneBtn}>저장</button>
            </div>
          )}
        </div>
        <span onClick={deleteUser}>회원탈퇴</span>
      </div>

      <div className={css.address_group}>
        <h2>주소록</h2>
        <h4>새 주소 추가</h4>

        <div className={css.address_box}>
          <form onSubmit={submit}>
            <input
              name="list"
              type="text"
              placeholder="주소를 입력해주세요."
              value={addressinput}
              onChange={changeAddress}
              ref={inputAddress}
            />
            <button type="submit" onClick={writeAddressBtn}>
              확인
            </button>
          </form>
        </div>
        <div className={css.divider} />

        <div className={css.add_address}>
          {profileInfo &&
            profileInfo.address?.map(data => {
              if (data.address !== null) {
                const isOpenAddressInput = addressOpened === data.id;
                return (
                  <div className={css.add_lists} key={data.userId}>
                    <div>
                      <p>{profileInfo?.name}</p>
                      <p>{profileInfo?.phone}</p>
                      {data.address && <p>{data.address}</p>}
                      {isOpenAddressInput && (
                        <div className={css.hidden_address}>
                          <input
                            placeholder="변경할 주소를 입력해주세요."
                            value={text}
                            onChange={handleTextarea}
                          />
                          <button onClick={() => editAddressBtn(data.id)}>
                            변경
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <button onClick={() => openAddress(data.id)}>수정</button>
                      <button onClick={() => deleteAddress(data.id)}>
                        삭제
                      </button>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
