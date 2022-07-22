import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import css from './ProductAll.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAll = ({ data }) => {
  return (
    <div>
      <div className={css.wrap}>
        <Container>
          {data[0]?.sell_num ? (
            <div className={css.title_box}>
              <h1 className={css.eng_title}>Most Popular</h1>
              <h2 className={css.kor_title}>인기상품</h2>
            </div>
          ) : (
            <div className={css.title_box}>
              <h1 className={css.eng_title}>Just Dropped</h1>
              <h2 className={css.kor_title}>발매상품</h2>
            </div>
          )}
          <Row>
            {data.map(menu => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductAll;
