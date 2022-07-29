import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import css from './ProductAll.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAll = ({ data, title, displayNum }) => {
  return (
    <div>
      <div className={css.wrap}>
        <Container>
          {title === 'Most Popular' ? (
            <div className={css.title_box}>
              <h1 className={css.eng_title}>{title}</h1>
              <h2 className={css.kor_title}>인기 상품</h2>
            </div>
          ) : (
            <div className={css.title_box}>
              <h1 className={css.eng_title}>{title}</h1>
              <h2 className={css.kor_title}>발매 상품</h2>
            </div>
          )}
          <Row>
            {data.slice(0, displayNum).map(menu => {
              return (
                <Col lg={3}>
                  <ProductCard item={menu} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductAll;
