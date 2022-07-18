import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './DealCheck.module.scss';

function DealCheck() {
  const location = useLocation();
  const isBuyPage = location.pathname.includes('buy');

  const id = location.pathname.split('/')[3];

  const navigate = useNavigate();
  const moveToDeal = () => {
    if (isBuyPage) {
      navigate(`/buy/${id}`);
    } else {
      navigate(`/sell/${id}`);
    }
  };

  const [isCheckedProduct, setIsCheckedProduct] = useState(false);
  const [isCheckedNew, setIsCheckedNew] = useState(false);
  const [isCheckedError, setIsCheckedError] = useState(false);
  const [isCheckedInspection, setIsCheckedInspection] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const [allChecked, setAllChecked] = useState(false);

  const productCheckBtn = () => {
    setIsCheckedProduct(!isCheckedProduct);
  };

  const newCheckBtn = () => {
    setIsCheckedNew(!isCheckedNew);
  };

  const errCheckBtn = () => {
    setIsCheckedError(!isCheckedError);
  };

  const inspectionCheckBtn = () => {
    setIsCheckedInspection(!isCheckedInspection);
  };

  const allCheckBtn = () => {
    setIsCheckedAll(!isCheckedAll);
  };

  const checkValidaion = () => {
    if (
      isCheckedProduct &&
      isCheckedNew &&
      isCheckedError &&
      isCheckedInspection &&
      isCheckedAll
    ) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  useEffect(() => {
    checkValidaion();
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
            <div className={css.size}>M</div>
          </div>
        </div>
        <div className={css.check_product}>
          <div className={css.check_text}>
            <label
              className={css.label}
              htmlFor="check_product"
              onClick={productCheckBtn}
            >
              {isBuyPage ? '구매' : '판매'}하려는 상품이 맞습니다.
              <div>
                상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더
                확인했습니다.
              </div>
            </label>
          </div>
          <div>
            <input
              className={css.check}
              name="check_product"
              type="checkbox"
              checked={isCheckedProduct}
              onChange={productCheckBtn}
            />
          </div>
        </div>
        <div className={css.check_product}>
          <div className={css.check_text}>
            <label
              className={css.label}
              htmlFor="check_new"
              onClick={newCheckBtn}
            >
              국내/해외에서 발매한 정품 · 새상품입니다.
              <div>
                모든 구성품이 그대로이며, 한 번도 사용하지 않은
                정품・새상품입니다.{' '}
                {isBuyPage
                  ? '국내 발매 상품 여부는 확인드리지 않습니다.'
                  : '중고품 판매는 불가능합니다.'}
              </div>
            </label>
          </div>
          <div>
            <input
              className={css.check}
              name="check_new"
              type="checkbox"
              checked={isCheckedNew}
              onChange={newCheckBtn}
            />
          </div>
        </div>
        <div className={css.check_product}>
          <div className={css.check_text}>
            <label
              className={css.label}
              htmlFor="check_error"
              onClick={errCheckBtn}
            >
              {isBuyPage
                ? '제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다.'
                : '박스/패키지의 상태를 확인합니다.'}
              <div>
                {isBuyPage
                  ? '박스/패키지와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.'
                  : '박스/패키지 상태에 따른 검수 기준과 패키지(포장) 개봉 검수에 대한 주의사항을 확인했습니다.'}
              </div>
            </label>
          </div>
          <div>
            <input
              className={css.check}
              name="check_error"
              type="checkbox"
              checked={isCheckedError}
              onChange={errCheckBtn}
            />
          </div>
        </div>
        <div className={css.check_product}>
          <div className={css.check_text}>
            <label
              className={css.label}
              htmlFor="check_inspection"
              onClick={inspectionCheckBtn}
            >
              {isBuyPage
                ? '패키지(포장) 개봉 검수에 대한 주의사항을 확인합니다.'
                : '이중 포장하여 선불 발송합니다.'}
              <div>
                {isBuyPage
                  ? '검수 과정 중 밀봉 및 실링이 모두 개봉되어 KREAM 패키지로 포장되어 발송됩니다. 오리지널 폴리백이 포함되지 않을 수 있습니다.'
                  : '반드시 이중 포장하여 택배 상자에 담아 선불 발송합니다. 합배송은 권장하지 않으며 이로 인한 박스/패키지 훼손은 판매자의 책임입니다.'}
              </div>
            </label>
          </div>
          <div>
            <input
              className={css.check}
              name="check_inspection"
              type="checkbox"
              checked={isCheckedInspection}
              onChange={inspectionCheckBtn}
            />
          </div>
        </div>
        <div className={`${css.check_product} ${css.last}`}>
          <div className={css.check_text}>
            <label
              className={css.label}
              htmlFor="check_all"
              onClick={allCheckBtn}
            >
              DREAM의 최신 이용정책을 모두 확인하였으며,
              {isBuyPage ? '구매' : '판매'}를 계속합니다.
              <div>
                건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티,
                부정거래 등의 이용정책을 확인했습니다.
              </div>
            </label>
          </div>
          <div>
            <input
              className={css.check}
              name="check_all"
              type="checkbox"
              checked={isCheckedAll}
              onChange={allCheckBtn}
            />
          </div>
        </div>
        <button
          disabled={!allChecked}
          className={!allChecked ? css.disabled : undefined}
          onClick={moveToDeal}
        >
          {isBuyPage ? '구매 계속' : '판매 계속'}
        </button>
      </div>
    </div>
  );
}

export default DealCheck;
