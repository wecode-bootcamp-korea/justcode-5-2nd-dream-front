import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import css from './Styles.module.scss';
import ProductAll from './ProductAll';
import 'bootstrap/dist/css/bootstrap.min.css';

function OutlineTypesExample() {
  const [filter, setFilter] = useState('like_num');

  return (
    <>
      <div className={css.wrap}>
        <Button
          onClick={() => setFilter('like_num')}
          variant="outline-dark"
          size="sm"
        >
          <span className={css.btn_text}>인기</span>
        </Button>
        <Button
          onClick={() => setFilter('created_at')}
          variant="outline-dark"
          size="sm"
        >
          <span className={css.btn_text}>최신</span>
        </Button>
      </div>

      <div>
        <ProductAll queryString={filter} />
      </div>
    </>
  );
}

export default OutlineTypesExample;
