import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import css from './ProductAll.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../config';

const ProductAll = ({ queryString }) => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `${BASE_URL}/style?sort=${queryString}`;
    let response = await fetch(url, { method: 'GET' });
    let data = await response.json();
    data = data.data;
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [queryString]);
  return (
    <div>
      <div className={css.wrap}>
        <Container className={css.gap}>
          <Row className={css.gap}>
            {productList.map(menu => (
              <Col lg={4}>
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
