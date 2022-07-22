import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './Payment.module.scss';
import BASE_URL from '../../config';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { size, price, sellId, productInfo } = location.state;
  const { comment } = productInfo;
  const productName = productInfo.name;
  const modelNum = productInfo.model_number;
  const img = productInfo.images[0].product_images;
  const userId = localStorage.getItem('userId');
  const productId = location.pathname?.split('/')[2];

  const [isCheckedCancel, setIsCheckedCancel] = useState(false);
  const cancelCheckBtn = () => {
    setIsCheckedCancel(!isCheckedCancel);
  };

  const [isCheckedDeal, setIsCheckedDeal] = useState(false);
  const dealCheckBtn = () => {
    setIsCheckedDeal(!isCheckedDeal);
  };

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const allCheckBtn = () => {
    setIsCheckedAll(!isCheckedAll);
  };

  const [valid, setValid] = useState(false);

  const dealValid = () => {
    if (isCheckedCancel && isCheckedDeal && isCheckedAll) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    dealValid();
  });

  const buyProduct = () => {
    fetch(`${BASE_URL}/purchase/${userId}/${sellId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sell_status_id: 2,
      }),
    })
      .then(alert('구매가 완료되었습니다.'))
      .then(navigate(`/products/${productId}`));
  };

  const [address, setAddress] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [name, setName] = useState(undefined);
  useEffect(() => {
    fetch(`${BASE_URL}/mypage/${userId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPhone(data.data[0].phone);
        setName(data.data[0].name);
        setAddress(data.data[0].address[0].address);
      });
  }, [userId]);

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.content_top}>
          <div className={css.image}>
            <img src={img} alt="product_img" />
          </div>
          <div className={css.text}>
            <div>{modelNum}</div>
            <div>{productName}</div>
            <div className={css.kr_name}>{comment}</div>
            <div className={css.size}>{size}</div>
          </div>
        </div>
      </div>

      <div className={css.address}>
        <div className={css.address_top}>
          <h1>배송 주소</h1>
          <div className={css.address_info}>
            <div className={css.address_info_left}>받는 분</div>
            <div className={css.address_right}>{name}</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>연락처</div>
            <div className={css.address_right}>{phone}</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>배송 주소</div>
            <div className={css.address_info_right}>{address}</div>
          </div>
        </div>

        <h1>배송 방법</h1>
        <div className={css.ship_way}>
          <div>일반배송 3,000원</div>
          <div className={css.ship_desc}>검수 후 배송 5-7일 내 도착 예정</div>
        </div>
      </div>

      <div className={css.point}>
        <h1>포인트</h1>
        <div>
          <input value={0} readOnly />
          <button>모두 사용</button>
        </div>
        <div className={css.point_num}>보유 포인트 0P</div>
      </div>

      <div className={css.last_order_info}>
        <h1>최종 주문 정보</h1>
        <div className={css.price}>
          <div>총 결제금액</div>
          <div className={css.price_num}>
            {(price * 1.02 + 3000)?.toLocaleString()}원
          </div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_price}>즉시 구매가</div>
          <div>{price?.toLocaleString()}원</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>포인트</div>
          <div>-</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>검수비</div>
          <div>무료</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>수수료</div>
          <div>{price * 0.02}원</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>배송비</div>
          <div>3,000원</div>
        </div>
      </div>

      <div className={css.deal_way}>
        <h1>결제 방법</h1>
        <div className={css.easy}>
          <div className={css.easy_way}>
            <div className={css.deal_title}>간편 결제</div>
            <div className={css.lump_sum}>일시불</div>
          </div>
          <button>+새 카드 추가</button>
        </div>
        <div className={css.card}>
          <div className={css.company}>신한</div>
          <div>**** **** **** 1234</div>
        </div>
      </div>

      <div className={css.checks}>
        <div className={css.check}>
          <div className={css.check_text} onClick={cancelCheckBtn}>
            <label className={css.label} htmlFor="check_cancel">
              판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우,
              거래가 취소될 수 있습니다.
              <div className={css.sub}>
                앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래
                진행 상태 알림을 받을 수 없습니다.
              </div>
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_cancel"
              type="checkbox"
              checked={isCheckedCancel}
              onChange={cancelCheckBtn}
            />
          </div>
        </div>
        <div className={css.check}>
          <div className={css.check_text} onClick={dealCheckBtn}>
            <label className={css.label} htmlFor="check_deal">
              ‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나
              실수에 의한 취소가 불가능합니다.
              <div className={css.sub}>
                본 거래는 개인간 거래로 전자상거래법(제17조)에 따른
                청약철회(환불, 교환) 규정이 적용되지 않습니다.
              </div>
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_deal"
              type="checkbox"
              checked={isCheckedDeal}
              onChange={dealCheckBtn}
            />
          </div>
        </div>
        <div className={css.check}>
          <div className={css.check_text} onClick={allCheckBtn}>
            <label className={css.label} htmlFor="check_all">
              구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_all"
              type="checkbox"
              checked={isCheckedAll}
              onChange={allCheckBtn}
            />
          </div>
        </div>
        <div className={css.last_price}>
          <h1>총 결제금액</h1>
          <div className={css.price}>
            {' '}
            {(price * 1.02 + 3000)?.toLocaleString()}원
          </div>
        </div>
        <button
          className={valid ? css.deal : `${css.deal} ${css.disabled}`}
          onClick={buyProduct}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default Payment;
