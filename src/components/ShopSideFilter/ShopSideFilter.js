import React from 'react';
import css from './ShopSideFilter.module.scss';

function ShopSideFilter() {
  const filterData = [
    {
      id: 1,
      text_1: '카테고리',
      text_2: '모든 카테고리',
    },
    {
      id: 2,
      text_1: '브랜드',
      text_2: '모든 브랜드',
    },
    {
      id: 3,
      text_1: '성별',
      text_2: '모든 성별',
    },
    {
      id: 4,
      text_1: '사이즈',
      text_2: '모든 사이즈',
    },
    {
      id: 4,
      text_1: '가격',
      text_2: '모든 가격',
    },
  ];
  return (
    <div className={css.search_filter}>
      <div className={css.filter_status}>
        <div className={css.status_box}>
          <span>필터</span>
        </div>
        <div className={css.filter_list}>
          <div className={css.filter_title}>
            <div className={css.main_title}>{filterData[0].text_1}</div>
            <div className={css.all_category}>{filterData[0].text_2}</div>
          </div>
          <div className={css.icon_box}> + </div>
        </div>
      </div>
    </div>
  );
}

export default ShopSideFilter;
