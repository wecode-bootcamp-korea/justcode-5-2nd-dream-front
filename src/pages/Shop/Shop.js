import React, { useState, useEffect } from 'react';
import css from './Shop.module.scss';
import ShopTitle from '../../components/ShopTitle/ShopTitle';
import ShopTopBanner from '../../components/ShopTopBanner/ShopTopBanner';
import ShopSideFilter from '../../components/ShopSideFilter/ShopSideFilter';
import ShopSearchContent from '../../components/ShopSearchContent/ShopSearchContent';

function Shop() {
  const [searchInfo, setSearchInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const [keyword, setKeyword] = useState('sell_num');

  useEffect(() => {
    setIsUpdated(false);
    fetch(`http://localhost:10010/search?sort=${keyword}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSearchInfo(data);
      });
  }, [isUpdated, keyword]);

  return (
    <div className={css.container}>
      <ShopTitle />
      <ShopTopBanner searchInfo={searchInfo} />
      <div className={css.content}>
        <ShopSideFilter />
        <ShopSearchContent searchInfo={searchInfo} setKeyword={setKeyword} />
      </div>
    </div>
  );
}

export default Shop;
