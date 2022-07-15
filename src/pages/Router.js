import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from './Login/Login';
import Signup from './SIgnup/Signup';
import Shop from './Shop/Shop';
import MyPage from './MyPage/MyPage';
import Wish from './Wish/Wish';
import ProductDetail from './ProductDetail/ProductDetail';
import BuySellPage from './BuySellPage/BuySellPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/mypage/wish/:id" element={<Wish />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/buy/:id" element={<BuySellPage />} />
        <Route path="/sell/:id" element={<BuySellPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
