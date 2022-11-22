import React, { useState } from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/Biker_Flatline.svg';

function Header(props) {
  const { cartItems } = props;
  const { length } = cartItems;
  const [cart, setCart] = useState(true);
  return (
    <Navbar sticky="top" expand="lg" className="text-light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="header-logo">
            <img className="logo-img img-fluid" src={logo} alt="logo" />
            <h6 className="logo-text">
              The
              <br />
              Bike
              <br />
              Shop
            </h6>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setCart(!cart)}>
          <AiOutlineMenu />
          {cart && <span className="cart-count-main">{length}</span>}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink to="/shop" className="header-link">
              Shop
            </NavLink>
            <NavLink to="/about" className="header-link">
              About
            </NavLink>
            <NavLink to="/cart" className=" header-link cart">
              <BsFillCartFill />
              <span className="cart-count">{length}</span>

            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
