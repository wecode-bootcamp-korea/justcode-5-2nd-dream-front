import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Payment.module.scss';

function Payment() {
  const location = useLocation();
  const { size, price } = location.state;

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

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.content_top}>
          <div className={css.image}>
            <img
              src="https://img.freepik.com/free-psd/black-t-shirt-mockup_125540-430.jpg?t=st=1657692010~exp=1657692610~hmac=d78542f2763d0764641356256be067c08d73c6f0aa84913fdcee87dbfd3ce08a&w=2000"
              alt="product_img"
            />
          </div>
          <div className={css.text}>
            <div>B6047317</div>
            <div>Aurolee Small Logo T-Shirt Black</div>
            <div className={css.kr_name}>오로리 스몰 로고 티셔츠 블랙</div>
            <div className={css.size}>{size}</div>
          </div>
        </div>
      </div>

      <div className={css.address}>
        <div className={css.address_top}>
          <h1>배송 주소</h1>
          <div className={css.address_info}>
            <div className={css.address_info_left}>받는 분</div>
            <div className={css.address_right}>정**</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>연락처</div>
            <div className={css.address_right}>010-6***-*337</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>배송 주소</div>
            <div className={css.address_info_right}>
              경기 화성시 동탄순환대로00길 00 (OO동, 그린힐 반도유보라
              아이비파크 10) 0000동 0000호
            </div>
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
        <button className={valid ? css.deal : `${css.deal} ${css.disabled}`}>
          결제하기
        </button>
      </div>
    </div>
  );
}

export default Payment;
