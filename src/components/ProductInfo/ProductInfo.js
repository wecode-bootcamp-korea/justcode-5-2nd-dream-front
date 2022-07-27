import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import css from './ProductInfo.module.scss';
import ProductOtherInfo from '../ProductOtherInfo/ProductOtherInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import ProductModal from '../ProductModal/ProductModal';
import BASE_URL from '../../config';
import useToast from '../../hooks/useToast';
import Toast from '../../components/Toast/Toast';

function ProductInfo(props) {
  const { isLogin } = props;
  const id = useLocation().pathname.split('/')[2];
  const token = localStorage.getItem('token');

  const userId = localStorage.getItem('userId');
  const [address, setAddress] = useState(undefined);
  const [sizeList, setSizeList] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [productInfo, setProductInfo] = useState(undefined);
  const [produtDetailId, setProductDetailId] = useState(undefined);
  const [sellId, setSellId] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isWished, setIsWished] = useState(undefined);

  useEffect(() => {
    setIsUpdated(false);
    fetch(`${BASE_URL}/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data[0]);
      });
  }, [isUpdated, id, isLogin]);

  const latestPrice = Number(productInfo?.latest_price)?.toLocaleString();
  const wishNum = productInfo?.wish_num;
  const modelNum = productInfo?.model_number;
  const release = productInfo?.created_at.slice(0, 10);
  const color = productInfo?.color;
  const salePrice = Number(productInfo?.sale_price)?.toLocaleString();
  const brand = productInfo?.brand;
  const name = productInfo?.name;
  const subName = productInfo?.comment;

  useEffect(() => {
    fetch(`${BASE_URL}/mypage/${userId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const address = data?.data[0]?.address[0]?.address;
        setAddress(address);
      });
  }, [userId]);

  useEffect(() => {
    fetch(`${BASE_URL}/information/${id}`)
      .then(res => res.json())
      .then(data => {
        const sizeList = data?.data[0]?.size_list;
        setSizeList(sizeList);
        setSize(sizeList[0].size);
        setPrice(sizeList[0].price);
        setProductDetailId(sizeList[0].product_detail_id);
        setSellId(sizeList[0]['sell.id']);
      });
  }, [id]);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const moveToDealCheck = deal => {
    if (sizeList === undefined) {
      setDealState(true);
    } else if (address === null) {
      setAddressState(true);
      setTimeout(() => {
        navigate('/mypage');
      }, 1000);
    } else if (token === null) {
      navigate('/login');
    } else {
      navigate(`/${deal}/select/${id}`, {
        state: { sizeList, produtDetailId, productInfo },
      });
    }
  };

  useEffect(() => {
    fetch(`${BASE_URL}/wish/${userId}`)
      .then(res => res.json())
      .then(data => {
        const wishLength = data.data.filter(
          d => d.product_id === Number(id)
        ).length;
        if (wishLength !== 0) {
          setIsWished(true);
        } else {
          setIsWished(false);
        }
      });
  }, [isWished, isUpdated, id, userId]);

  const toggleWish = method => {
    return {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        product_id: id,
      }),
    };
  };

  const wish = () => {
    if (!userId) {
      navigate('/login');
    } else if (!isWished) {
      fetch(`${BASE_URL}/wish`, toggleWish('POST'))
        .then(setIsWished(true))
        .then(setIsUpdated(true));
    } else {
      fetch(`${BASE_URL}/wish`, toggleWish('DELETE'))
        .then(setIsWished(false))
        .then(setIsUpdated(true));
    }
  };

  const [dealState, setDealState] = useState(false);
  useToast(dealState, setDealState);

  const [addressState, setAddressState] = useState(false);
  useToast(addressState, setAddressState);

  return (
    <div className={css.container}>
      {dealState && <Toast message="현재 거래가 불가능한 상품입니다." />}
      {addressState && <Toast message="주소를 입력해주세요." />}
      <ProductModal
        close={closeModal}
        open={modalOpen}
        size={size}
        setSize={setSize}
        price={price}
        setPrice={setPrice}
        sizeList={sizeList}
        sellId={sellId}
        setSellId={setSellId}
      />
      <Link to>{brand}</Link>
      <p className={css.name}>{name}</p>
      <p className={css.sub_name}>{subName}</p>
      <div className={css.size_container}>
        <span className={css.size}>사이즈</span>
        <span className={css.all_size} onClick={openModal}>
          {size}
          <FontAwesomeIcon icon={faCircleDown} className={css.circle} />
        </span>
      </div>
      <div className={css.sell_container}>
        <span className={css.recent_sell}>최근 거래가</span>
        <span className={css.price}>{latestPrice}원</span>
      </div>
      <div className={css.buttons}>
        <button className={css.buy_btn} onClick={() => moveToDealCheck('buy')}>
          <div className={css.text}>
            <div className={css.buy_text}>구매</div>
            <div className={css.buy_price}>
              <div>
                {sizeList ? `${price?.toLocaleString()}원` : '구매 불가'}
              </div>
              <div className={css.immediately}>즉시 구매가</div>
            </div>
          </div>
        </button>
        <button
          className={css.sell_btn}
          onClick={() => moveToDealCheck('sell')}
        >
          <div className={css.text}>
            <div className={css.sell_text}>판매</div>
            <div className={css.sell_price}>
              <div>
                {sizeList ? `${price?.toLocaleString()}원` : '판매 불가'}
              </div>
              <div className={css.immediately}>즉시 판매가</div>
            </div>
          </div>
        </button>
        <button className={css.interested} onClick={wish}>
          {isWished !== undefined && (
            <FontAwesomeIcon
              icon={faBookmark}
              className={css.bookmark}
              color={isWished ? 'black' : 'lightgray'}
            />
          )}
          관심상품 {wishNum === null ? 0 : wishNum}
        </button>
      </div>
      <h3>상품 정보</h3>
      <div className={css.info_container}>
        <div className={css.info_div}>
          <div className={css.info_title}>모델번호</div>
          <div>{modelNum}</div>
        </div>
        <div className={css.info_div}>
          <div className={css.info_title}>출시일</div>
          <div>{release}</div>
        </div>
        <div className={css.info_div}>
          <div className={css.info_title}>컬러</div>
          <div>{color}</div>
        </div>
        <div className={`${css.info_div} ${css.last}`}>
          <div className={css.info_title}>발매가</div>
          <div>{salePrice}원</div>
        </div>
      </div>
      <ProductOtherInfo />
    </div>
  );
}

export default ProductInfo;
