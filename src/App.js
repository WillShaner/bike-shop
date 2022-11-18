/* eslint-disable*/
import React, { useState } from 'react';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import AboutPage from '../src/components/AboutPage';
import CartPage from '../src/components/CartPage';
import Footer from '../src/components/Footer';
import Shop from '../src/components/Shop';
import './style.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: (exist.qty += 1) } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  function removeFromCart(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: (exist.qty -= 1) } : x
        )
      );
    }
  }
  return (
    <Router>
      <div className="container-main">
        <Header cartItems={cartItems} />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                />
              }
            />
          </Routes>
        </>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
