import React, { useEffect } from 'react';
import css from './ProductModal.module.scss';

const ProductModal = props => {
  const { open, close, size, setSize, setPrice, setSellPrice } = props;

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
  const sizeList = ['모든 사이즈', 'S', 'M', 'L', 'XL', 'XXL'];
  const priceList = [60000, 66000, 90000, 45000, 100000, 50000];
  const sellPriceList = [70000, 80000, 90000, 100000, 90000, 80000];

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
                  value={[s, priceList[idx], sellPriceList[idx]]}
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
