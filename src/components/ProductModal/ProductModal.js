import React, { useEffect } from 'react';
import css from './ProductModal.module.scss';

const ProductModal = props => {
  const {
    open,
    close,
    size,
    setSize,
    setPrice,
    sizeList,
    setIsSoldOut,
    setProductDetailId,
  } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const handleSize = e => {
    setSize(e.target.value?.split(',')[0]);
    setPrice(Number(e.target.value?.split(',')[1]));
    setIsSoldOut(e.target.value?.split(',')[2]);
    setProductDetailId(e.target.value?.split(',')[2]);
    close();
  };

  return (
    <div className={open ? `${css.openModal} ${css.modal}` : css.modal}>
      {open ? (
        <section>
          <header>
            <div>사이즈</div>
            <button className={css.confirm} onClick={close}>
              X
            </button>
          </header>
          <div className={css.sizes}>
            {sizeList?.map(s => {
              const isSelected = s.size === size;
              return (
                <button
                  className={isSelected ? css.selected : undefined}
                  onClick={handleSize}
                  value={[s.size, s.price, s.status, s.product_detail_id]}
                  key={s['sell.id']}
                >
                  {s.size}
                  <br />
                  {s.price}
                </button>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ProductModal;
