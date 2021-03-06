import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './OrderSettlement.module.scss';
import BASE_URL from '../../config';
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
      {completeState && <Toast message="?????? ????????? ?????????????????????." />}
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
        <h1>?????? ?????? ??????</h1>
        <div className={css.content}>
          <div>
            <div>????????? ?????? ?????? ????????? ????????????.</div>
            <div>??? ??????????????? ??????????????????!</div>
          </div>
          <button className={css.add_acount}>?????? ??????</button>
        </div>
      </div>
      <div className={css.address}>
        <div className={css.address_top}>
          <h1>?????? ??????</h1>
          <div className={css.address_info}>
            <div className={css.address_info_left}>?????? ???</div>
            <div className={css.address_right}>{name}</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>?????????</div>
            <div className={css.address_right}>{phone}</div>
          </div>
          <div className={css.address_info}>
            <div className={css.address_info_left}>?????? ??????</div>
            <div className={css.address_info_right}>{address}</div>
          </div>
        </div>

        <h1>?????? ??????</h1>
        <div className={css.ship_way}>
          <div>???????????? ??????</div>
          <div className={css.ship_desc}>?????? ?????? ??? ?????????????????? ??????</div>
        </div>
      </div>

      <div className={css.last_order_info}>
        <h1>?????? ?????? ??????</h1>
        <div className={css.price}>
          <div>????????????</div>
          <div className={css.price_num}>{price}???</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_price}>?????? ?????????</div>
          <div>{price}???</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>?????????</div>
          <div>??????</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>?????????</div>
          <div>??????</div>
        </div>
        <div className={css.price_addition}>
          <div className={css.price_addition_title}>?????????</div>
          <div>?????? ????????? ??????</div>
        </div>
      </div>

      <div className={css.penalty_way}>
        <h1>????????? ?????? ??????</h1>
        <div className={css.easy}>
          <div className={css.easy_way}>
            <div className={css.deal_title}>?????? ??????</div>
            <div className={css.lump_sum}>?????????</div>
          </div>
          <button>+??? ?????? ??????</button>
        </div>
        <div className={css.card}>
          <div className={css.company}>??????</div>
          <div>**** **** **** 1234</div>
        </div>
        <p>
          - ???????????? ???????????? ????????????, ????????? ??????????????? ????????? ??????????????? ??????
          ???????????????. ???, ???????????? ????????? ?????? ?????? ?????? ?????? ??? ???????????? ?????????
          ??? ????????????.
        </p>
        <p>
          - ?????????(?????????, ??????????????? ???)??? ???????????? ?????? ??????, ?????? ?????? ??????
          ?????? ????????? ?????? ?????? ??? ??? ????????????.
        </p>
      </div>

      <div className={css.checks}>
        <div className={css.check}>
          <div className={css.check_text} onClick={exactCheckBtn}>
            <label className={css.label} htmlFor="check_cancel">
              ????????? ???????????? ????????? ?? ???????????? ???????????? 48?????? ?????? DREAM??????
              ????????? ????????? ???, ?????? ????????? ????????? ???????????? ?????????.
              <div className={css.sub}>
                ?????? ?????? ??? ?????? ???????????? ?????? ????????????, ????????? ??? ??????
                ???????????? ?????? ????????? ?????? ????????? ??? ????????????.
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
              ?????? ?????? ???????????????????? ??? ????????? ???????????? ?????????, ?????? ???
              5???(???????????????????? ??????) ??? ???????????? ?????? ?????? ???????????? ????????????
              ????????? ???????????? ???????????????.
              <div className={css.sub}>
                ??? ?????? ??????, ????????? ??????, ???????????? ?????? ??? ????????? ????????? ??????
                ?????? ?????? ????????? ?????? ??? ????????? ?????? ?????? ?????? ????????? ????????????
                ???????????????.
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
              ?????? ????????? ????????? ??? ?????? ????????? ?????? ?????? ?????????????????????.
              <div className={css.sub}>
                ???????????? ?????? ???, ?????? ????????? ?????? 15.0%??? ???????????? ???????????????.
                ????????? ?????? ??? ?????? ????????? ???????????? ?????? ???????????? ?????? ?????????
                ?????? ????????? ??? ????????????.
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
              ?????? ????????? ?????? ??????????????????, ?????? ????????? ???????????????.
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
          <h1>????????????</h1>
          <div className={css.price}>{price}???</div>
        </div>
        <button
          className={valid ? css.deal : `${css.deal} ${css.disabled}`}
          onClick={sellProduct}
        >
          ?????? ????????????
        </button>
      </div>
    </div>
  );
}

export default OrderSettlement;
