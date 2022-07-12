import React from 'react';
import css from './ShopSideFilter.module.scss';

function ShopSideFilter() {
  return (
    <div className={css.search_filter}>
      <div className={css.filter_status}>
        <div className={css.status_box}>
          <span>필터</span>
        </div>
        <div className={css.filter_list}>
          <div className={css.filter_title}>
            <div className={css.title_box}>
              <div className={css.main_title}>카테고리</div>
              <div className={css.all_category}>모든 카테고리</div>
            </div>
            <div className={css.icon_box}></div>
          </div>
          <div className={css.filter_menu}>메뉴</div>
        </div>
      </div>
    </div>
  );
}

export default ShopSideFilter;
