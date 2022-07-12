import React from 'react';
import css from './ShopTitle.module.scss';

function ShopTitle() {
  return (
    <div className={css.title_container}>
      <div className={css.title_box}>
        <h1>SHOP</h1>
      </div>
      <div className={css.quick_filter}>
        <div className={css.filter_icon}>
          <img
            //   https://img.icons8.com/fluency-systems-filled/344/sorting-options.png
            //   https://img.icons8.com/fluency-systems-regular/344/sorting-options.png
            src="https://img.icons8.com/fluency-systems-regular/344/sorting-options.png"
            alt="필터아이콘"
          />
        </div>
        <span className={css.btn_quick_filter}>신발</span>
        <span className={css.btn_quick_filter}>의류</span>
        <span className={css.btn_quick_filter}>패션잡화</span>
        <span className={css.btn_quick_filter}>라이프</span>
        <span className={css.btn_quick_filter}>테크</span>
      </div>
    </div>
  );
}

export default ShopTitle;
