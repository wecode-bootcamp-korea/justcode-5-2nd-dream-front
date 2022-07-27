import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import css from './Styles.module.scss';
import { Container } from 'react-bootstrap';
import ProductAll from './ProductAll';
import 'bootstrap/dist/css/bootstrap.min.css';

function OutlineTypesExample() {
  const [filter, setFilter] = useState('like_num');
  console.log(filter);
  // const filtering = () => {
  //   filter === 'like_num' ?
  // }
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
        {/* <Button variant="outline-primary">팔로잉</Button>{' '} */}
      </div>

      <Container>
        <div className={css.Container}>
          <div className={css.tag}>
            <Button>#줌인챌린지</Button>
            <Button>#스트릿룩</Button> <Button>#프스캇</Button>
            <Button>#여름코디</Button> <Button>#스타피쉬</Button>
            <Button>#KREAMSTYLE</Button>
            <Button>#베이퍼와플</Button>
            <Button>#오늘은뭐입지</Button>
          </div>
        </div>
      </Container>

      <div>
        <ProductAll queryString={filter} />
      </div>
    </>
  );
}

export default OutlineTypesExample;
