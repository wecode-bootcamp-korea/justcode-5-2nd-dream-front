import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './OrderSettlement.module.scss';
import { BASE_URL } from '../../config';
import useToast from '../../hooks/useToast';
import Toast from '../../components/Toast/Toast';

function OrderSettlement() {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const productDetailId = location.state.productDetailId;
  const size = location.state.size;
  const price = Number(location.state.price)?.toLocaleString();
  const productInfo = location.state.productInfo;
  const { comment } = productInfo;
  const productName = productInfo.name;
  const modelNum = productInfo.model_number;
  const img = productInfo.images[0].product_images;

  const [isCheckedExact, setIsCheckedExact] = useState(false);
  const exactCheckBtn = () => {
    setIsCheckedExact(!isCheckedExact);
  };

  const [isCheckedError, setIsCheckedError] = useState(false);
  const errorCheckBtn = () => {
    setIsCheckedError(!isCheckedError);
  };

  const [isCheckedRe, setIsCheckedRe] = useState(false);
  const reCheckBtn = () => {
    setIsCheckedRe(!isCheckedRe);
  };

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const allCheckBtn = () => {
    setIsCheckedAll(!isCheckedAll);
  };

  const [valid, setValid] = useState(false);
  const dealValid = () => {
    if (isCheckedExact && isCheckedError && isCheckedRe && isCheckedAll) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    dealValid();
  });

  const productPrice = Number(
    price
      .split('')
      .filter(e => e !== ',')
      .join('')
  );

  const userId = localStorage.getItem('userId');
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

  const sellProduct = () => {
    fetch(`${BASE_URL}/sale`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: productPrice,
        user_id: userId,
        product_detail_id: productDetailId,
        product_id: productId,
      }),
    })
      .then(setCompleteState(true))
      .then(
        setTimeout(() => {
          navigate(`/products/${productId}`);
        }, 1000)
      );
  };

  const [completeState, setCompleteState] = useState(false);
  useToast(completeState, setCompleteState);

  return (
    <div className={css.container}>
      {completeState && <Toast message="판매 등록이 완료되었습니다." />}
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

      <div className={css.settle_acount}>
        <h1>판매 정산 계좌</h1>
        <div className={css.content}>
          <div>
            <div>등록된 판매 정산 계좌가 없습니다.</div>
            <div>새 계좌번호를 추가해주세요!</div>
          </div>
          <button className={css.add_acount}>계좌 추가</button>
        </div>
      </div>
      <div className={css.address}>
        <div className={css.address_top}>
          <h1>반송 주소</h1>
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

        <h1>발송 방법</h1>
        <div className={css.ship_way}>
          <div>택배발송 선불</div>
          <div className={css.ship_desc}>착불 발송 시 정산금액에서 차감</div>
        </div>
      </div>

      <div className={css.last_order_info}>
        <h1>최종 주문 정보</h1>
        <div className={css.price}>
          <div>정산금액</div>
          <div className={css.price_num}>{price}원</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_price}>즉시 판매가</div>
          <div>{price}원</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>검수비</div>
          <div>무료</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>수수료</div>
          <div>무료</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>배송비</div>
          <div>선불 판매자 부담</div>
        </div>
      </div>

      <div className={css.penalty_way}>
        <h1>페널티 결제 방법</h1>
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
        <p>
          - 페널티는 일시불만 지원하며, 카드사 홈페이지나 앱에서 분할납부로 변경
          가능합니다. 단, 카드사별 정책에 따라 분할 납부 변경 시 수수료가 발생할
          수 있습니다.
        </p>
        <p>
          - 수수료(페널티, 착불배송비 등)가 정산되지 않을 경우, 별도 고시 없이
          해당 금액을 결제 시도 할 수 있습니다.
        </p>
      </div>

      <div className={css.checks}>
        <div className={css.check}>
          <div className={css.check_text} onClick={exactCheckBtn}>
            <label className={css.label} htmlFor="check_cancel">
              거래가 체결되면 일요일 · 공휴일을 제외하고 48시간 내에 DREAM으로
              발송을 완료한 후, 발송 정보를 정확히 입력해야 합니다.
              <div className={css.sub}>
                착불 배송 시 판매 금액에서 차감 정산하며, 미정산 시 별도
                고지없이 해당 금액을 결제 시도할 수 있습니다.
              </div>
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_cancel"
              type="checkbox"
              checked={isCheckedExact}
              onChange={exactCheckBtn}
            />
          </div>
        </div>
        <div className={css.check}>
          <div className={css.check_text} onClick={errorCheckBtn}>
            <label className={css.label} htmlFor="check_deal">
              송장 번호 미기재·오입력 시 입고가 진행되지 않으며, 발송 후
              5일(일요일·공휴일 제외) 내 미도착은 허위 정보 입력으로 간주하여
              미입고 페널티를 부과합니다.
              <div className={css.sub}>
                앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래
                진행 상태 알림을 받을 수 없으며 이로 인한 거래 실패는 판매자의
                책임입니다.
              </div>
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_deal"
              type="checkbox"
              checked={isCheckedError}
              onChange={errorCheckBtn}
            />
          </div>
        </div>
        <div className={css.check}>
          <div className={css.check_text} onClick={reCheckBtn}>
            <label className={css.label} htmlFor="check_all">
              검수 기준과 페널티 및 이용 정책을 다시 한번 확인하였습니다.
              <div className={css.sub}>
                이용정책 위반 시, 판매 금액의 최대 15.0%의 페널티가 부과됩니다.
                페널티 회피 시 이후 거래가 제한되며 별도 고지없이 해당 금액을
                결제 시도할 수 있습니다.
              </div>
            </label>
          </div>
          <div className={css.check_input}>
            <input
              name="check_all"
              type="checkbox"
              checked={isCheckedRe}
              onChange={reCheckBtn}
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
          <h1>정산금액</h1>
          <div className={css.price}>{price}원</div>
        </div>
        <button
          className={valid ? css.deal : `${css.deal} ${css.disabled}`}
          onClick={sellProduct}
        >
          바로 판매하기
        </button>
      </div>
    </div>
  );
}

export default OrderSettlement;
