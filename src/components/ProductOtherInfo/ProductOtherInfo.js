import React from 'react';
import css from './ProductOtherInfo.module.scss';

function ProductOtherInfo() {
  return (
    <div className={css.container}>
      <h3 className={css.ship}>배송 정보</h3>
      <p className={css.normal_ship}>일반배송 3,000원</p>
      <p className={`${css.normal_ship} ${css.date}`}>
        검수 후 배송 ・ 5-7일 내 도착 예정
      </p>
      <h3>구매 전 꼭 확인해주세요</h3>
      <div className={css.check}>배송 기간 안내</div>
      <div className={css.check}>검수 안내</div>
      <div className={css.check}>구매 환불/취소/교환 안내</div>
      <div className={css.inspection}>
        <p className={css.inspection_title}>100% 정품 보증</p>
        <p className={css.inspection_desc}>
          DREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.
        </p>
      </div>
      <div className={css.inspection}>
        <p className={css.inspection_title}>엄격한 다중 검수</p>
        <p className={css.inspection_desc}>
          모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인
          시스템을 거쳐 검수를 진행합니다.
        </p>
      </div>
      <div className={css.inspection}>
        <p className={css.inspection_title}>정품 인증 패키지</p>
        <p className={css.inspection_desc}>
          검수에 합격한 경우에 한하여 DREAM의 정품 인증 패키지가 포함된 상품이
          배송됩니다.
        </p>
      </div>
      <p className={css.responsibility}>
        드림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한
        책임은 드림(주)에 있습니다.
      </p>
    </div>
  );
}

export default ProductOtherInfo;
