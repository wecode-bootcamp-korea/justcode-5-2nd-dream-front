import React from 'react';
import css from './Shop.module.scss';
import ShopTitle from '../../components/ShopTitle/ShopTitle';
import ShopTopBanner from '../../components/ShopTopBanner/ShopTopBanner';
import ShopSideFilter from '../../components/ShopSideFilter/ShopSideFilter';
import ShopSearchContent from '../../components/ShopSearchContent/ShopSearchContent';

function Shop() {
  return (
    <div className={css.container}>
      <ShopTitle />
      <ShopTopBanner />
      <div className={css.content}>
        <ShopSideFilter />
        <ShopSearchContent />
      </div>
    </div>
  );
}

export default Shop;
