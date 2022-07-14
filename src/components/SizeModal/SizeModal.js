import React, { useEffect } from 'react';
import css from './SizeModal.module.scss';

const SizeModal = props => {
  const { open, close, size, setSize } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const handleSize = e => {
    setSize(e.target.value);
  };

  const sizeList = [
    220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
    295, 300,
  ];

  return (
    <div className={open ? `${css.openModal} ${css.modal}` : css.modal}>
      {open ? (
        <section>
          <header>사이즈 선택</header>
          <div className={css.sizes}>
            {sizeList?.map(s => {
              const isSelected = s === Number(size);
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

export default SizeModal;
