import React from 'react';
import Banner from './Banner';
import Post from './Post';
import Slide from './Slide';
import ProductAll from './ProductAll';
function Home() {
  return <div>
    <Banner />
    <Post />
    {/* <Slide /> */}
    <ProductAll />
  </div>;
}

export default Home;
