import React from 'react';
import { Link } from 'react-router-dom';
import css from './ShopSearchContent.module.scss';
// import WishModal from '../../components/WishModal/WishModal';

function ShopSearchContent(props) {
  const { searchInfo, setKeyword } = props;
  console.log(searchInfo);

  const handleSellNum = e => {
    console.log(e);
    setKeyword(e.target.value);
  };

  return (
    <div className={css.search_content}>
      {/* <WishModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
        productImage={productImage}
        productImageText={productImageText}
        productNameEng={productNameEng}
        productNameKor={productNameKor}
      /> */}
      <div className={css.search_option}>
        <div className={css.filter_sorting}>
          <select onChange={handleSellNum}>
            <option value="sell_num">인기순</option>
            <option value="created_at">발매일순</option>
          </select>
        </div>
      </div>

      <ul className={css.search_list}>
        {searchInfo?.map(searchInfo => {
          return (
            <li className={css.search_item} key={searchInfo.id}>
              <Link to={`/products/${searchInfo.id}`}>
                <div className={css.product}>
                  <img
                    src={searchInfo.image_url}
                    alt={searchInfo.product_name}
                  />
                </div>
                <div className={css.product_info}>
                  <p className={css.brand_name}>{searchInfo.brand}</p>
                  <p className={css.product_name}>{searchInfo.product_name}</p>
                  <p className={css.product_name_kor}>{searchInfo.comment}</p>
                </div>
                <div className={css.product_price}>
                  <p className={css.price}>{searchInfo.price} 원</p>
                  <p className={css.immediate_purchase_price}>즉시구매가</p>
                </div>
              </Link>
              <div className={css.interest_figure}>
                <span className={css.wish_figure}>
                  <img
                    src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/external-Save-social-media-bearicons-detailed-outline-bearicons.png"
                    alt="관심상품"
                    // onClick={() => openModal(searchInfo.id)}
                  />
                  <p>{searchInfo.wish}</p>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShopSearchContent;
