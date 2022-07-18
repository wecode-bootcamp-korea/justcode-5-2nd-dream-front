import React, { useEffect } from 'react';
import css from './ProductModal.module.scss';

const ProductModal = props => {
  const {
    open,
    close,
    size,
    setSize,
    setPrice,
    setSellPrice,
    priceList,
    sizeList,
  } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const handleSize = e => {
    setSize(e.target.value?.split(',')[0]);
    setPrice(Number(e.target.value?.split(',')[1]));
    setSellPrice(Number(e.target.value?.split(',')[2]));
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
            {sizeList?.map((s, idx) => {
              const isSelected = s === size;
              return (
                <button
                  className={isSelected ? css.selected : undefined}
                  onClick={handleSize}
                  value={[s, priceList[idx]]}
                  key={s}
                >
                  {s}
                  <br />
                  {priceList[idx]}
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
