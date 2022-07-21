import React, { useEffect } from 'react';
import css from './WishModal.module.scss';

const WishModal = props => {
  const {
    open,
    close,
    size,
    setSize,
    productImage,
    productImageText,
    productNameEng,
    productNameKor,
  } = props;
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const handleSize = e => {
    setSize(e.target.value);
  };

  const sizeList = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <div className={open ? `${css.openModal} ${css.modal}` : css.modal}>
      {open ? (
        <section>
          <header>관심 상품 추가</header>
          <div className={css.product_box}>
            <img src={productImage} alt={productImageText} />
            <div className={css.product_info}>
              <p className={css.product_name}>{productNameEng}</p>
              <p className={css.product_name_kor}>{productNameKor}</p>
            </div>
          </div>
          <div className={css.divide} />
          <div className={css.sizes}>
            {sizeList?.map(s => {
              const isSelected = s === String(size);
              return (
                <button
                  className={isSelected ? css.selected : undefined}
                  onClick={handleSize}
                  value={s}
                  key={s}
                >
                  {s}
                </button>
              );
            })}
          </div>
          <button className={css.confirm} onClick={close}>
            확인
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default WishModal;
