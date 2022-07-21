import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import css from './ProductAll.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAll = ({ queryString }) => {
  console.log(queryString);
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:10010/style?sort=${queryString}`;
    console.log('url', url);
    // let response = await fetch(url);
    let response = await fetch(url, { method: 'GET' });
    let data = await response.json();
    data = data.data;
    setProductList(data);
    console.log('data: ', data);
    console.log('data: ', data[0].image_list);
  };
  useEffect(() => {
    getProducts();
  }, [queryString]);
  return (
    <div>
      <div className={css.wrap}>
        <Container>
          <Row>
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
