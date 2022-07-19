import React, { useState, useRef, useEffect } from 'react';
import css from './ProfileInfo.module.scss';
// import SizeModal from '../../components/SizeModal/SizeModal';

function ProfileInfo(props) {
  const { profileInfo, id, setProfileInfo } = props;
  useEffect(() => {
    fetch(`http://localhost:10010/mypage/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProfileInfo(data.data[0]);
      });
  }, [id, setProfileInfo]);

  //============ 신방사이즈 모달창 부분

  // const [size, setSize] = useState(undefined);
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  //============ 이름 변경 부분

  const [nameOpened, setNameOpened] = useState(false);

  function openName() {
    setNameOpened(true);
  }
  function closeName() {
    setNameOpened(false);
  }

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

  const removeList = id => {
    const about_lists = lists.filter(list => list.id !== id);
    setLists(about_lists);
  };

  const [addressOpened, setAddressOpened] = useState(false);

  function openAddress() {
    setAddressOpened(true);
  }

  function closeAddress() {
    setAddressOpened(false);
  }

  return (
    <div className={css.content_box}>
      {/* <SizeModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
      /> */}

      <div className={css.my_profile}>
        <div className={css.content_title_border}>
          <h3>프로필 정보</h3>
        </div>
        <div className={css.user_profile}>
          <div className={css.profile_img}>
            <img src={profileInfo.image} alt="사용자이미지" />
          </div>
          <h3>{profileInfo.name}</h3>
        </div>
        <div className={css.profile_info}>
          <div className={css.profile_group}>
            <h4>로그인정보</h4>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>이메일 주소</h5>
                <p>{profileInfo.email}</p>
              </div>
            </div>
            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>비밀번호</h5>
                <p>{profileInfo.password}</p>
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

            {!nameOpened && (
              <div className={css.email_box}>
                <div className={css.email_info}>
                  <h5>이름</h5>
                  <p>{profileInfo.name} </p>
                </div>
                <button onClick={openName}>변경</button>
              </div>
            )}
            {nameOpened && (
              <div className={css.email_box}>
                <div className={css.email_info}>
                  <h5>새로운 이름</h5>
                  <input
                    name="name"
                    type="text"
                    placeholder="고객님의 이름을 작성해주세요."
                  />
                </div>
                <button onClick={closeName}>저장</button>
              </div>
            )}

            <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>휴대폰 번호</h5>
                <input placeholder={profileInfo.phone} />
              </div>
              <button>변경</button>
            </div>
            {/* 신발사이즈 일단 주석처리 해놓기! */}
            {/* <div className={css.email_box}>
              <div className={css.email_info}>
                <h5>신발 사이즈</h5>
                <p>{userData[id].size}</p>
              </div>
              <button onClick={openModal}>변경</button>
            </div> */}
          </div>
          <span>회원탈퇴</span>
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
              <button type="submit">확인</button>
            </form>
          </div>
          <div className={css.divider} />
          <div className={css.add_address}>
            {lists.map(list => {
              return (
                <div key={list.id} className={css.add_lists}>
                  <div>
                    <p>{profileInfo.name}</p>
                    <p>{profileInfo.phone}</p>
                    <p>{list.text}</p>
                    {addressOpened && (
                      <div>
                        <input placeholder="변경할 주소" />
                        <button onClick={closeAddress}>확인</button>
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={openAddress}>수정</button>
                    <button onClick={() => removeList(list.id)}>삭제</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
