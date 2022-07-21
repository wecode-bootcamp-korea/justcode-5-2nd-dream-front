import React, { useEffect, useState } from 'react';
import css from './ProductImage.module.scss';
import { useLocation } from 'react-router-dom';
import BASE_URL from '../../config';

function ProductImage() {
  const [image, setImage] = useState(undefined);
  const id = useLocation().pathname.split('/')[2];
  useEffect(() => {
    fetch(`${BASE_URL}/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImage(data[0].images[0].product_images);
      });
  }, []);

  return (
    <div className={css.container}>
      <img src={image} alt="product" />
    </div>
  );
}

export default ProductImage;
