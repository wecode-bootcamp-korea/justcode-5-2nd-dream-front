import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from './Login/Login';
import Signup from './SIgnup/Signup';
import Shop from './Shop/Shop';
import MyPage from './MyPage/MyPage';
import WishPage from './WishPage/WishPage';
import BuyingPage from './BuyingPage/BuyingPage';
import SellingPage from './SellingPage/SellingPage';
import ProductDetail from './ProductDetail/ProductDetail';
import BuySellPage from './BuySellPage/BuySellPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DealCheck from './DealCheck/DealCheck';
import BeforePayment from './BeforePayment/BeforePayment';
import Payment from './Payment/Payment';
import OrderSettlement from './OrderSettlement/OrderSettlement';
import Stal from '../pages/stal/Button';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stal" element={<Stal />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/mypage/wish/:id" element={<WishPage />} />
        <Route path="/mypage/buying/:id" element={<BuyingPage />} />
        <Route path="/mypage/selling/:id" element={<SellingPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/buy/select/:id" element={<BuySellPage />} />
        <Route path="/sell/select/:id" element={<BuySellPage />} />
        <Route path="/buy/check/:id" element={<DealCheck />} />
        <Route path="/sell/check/:id" element={<DealCheck />} />
        <Route path="/buy/:id" element={<BeforePayment />} />
        <Route path="/sell/:id" element={<BeforePayment />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/settlement/:id" element={<OrderSettlement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
