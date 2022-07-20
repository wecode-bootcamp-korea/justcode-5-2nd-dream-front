import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import css from './ProductAll.module.scss';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    // let url = 'http://localhost:5500/products';
    let url = 'http://localhost:10010/main';
    let response = await fetch(url,{ method: 'GET' });
    let data = await response.json();
    setProductList(data);
    
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className={css.wrap}>
        <Container>
          <Row>
            {productList.map(menu => (
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
