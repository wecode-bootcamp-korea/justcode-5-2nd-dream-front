import React from 'react';
import css from './Shop.module.scss';
import ShopTopBanner from '../../components/ShopTopBanner/ShopTopBanner';
import ShopSideFilter from '../../components/ShopSideFilter/ShopSideFilter';

function Shop() {
  return (
    <div className={css.container}>
      <ShopTopBanner />
      <div className={css.content}>
        <ShopSideFilter />
        <div className={css.search_content}></div>
      </div>
    </div>
  );
}

export default Shop;
