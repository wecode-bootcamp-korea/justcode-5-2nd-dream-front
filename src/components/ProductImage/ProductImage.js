import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BASE_URL from '../../config';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductImage() {
  const [image, setImage] = useState(undefined);
  const id = useLocation().pathname.split('/')[2];
  useEffect(() => {
    fetch(`${BASE_URL}/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImage(data[0].images);
      });
  }, [id]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplatSpeed: 2000,
    slidesToShow: 1,
    sliedsToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {image?.map(img => {
          return (
            <CardBox>
              <CardImg alt="test" src={img.product_images} />
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  right: 60px;
  bottom: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 600px;
    margin: 50px auto;
    position: relative;
    left: 100px;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    position: relative;
    margin: 0 auto;
    left: 70px;
    bottom: 40px;
  }
  .slick-arrow {
    &::before {
      display: none;
    }
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 560px;
  height: 560px;
`;

export default ProductImage;
