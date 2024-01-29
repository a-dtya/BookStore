import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideCart from "./../sideCart/sideCart";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArrowRight } from 'react-bootstrap-icons';
import "./nav.css";
import book1 from "./booklogo.png"
import shopIcon from "./shopcart.png"
import avatarIcon from "./avatar.png"
import UseAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { auth } = UseAuth();
  const { t } = useTranslation();
  ////////////////////////////////////////////////////
  const [isCartOpen, setIsCartOpen] = useState(false);
  const counter = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0)
  );
  const shareIcon = (
    <svg style={{width: '1.5rem',height: '1.5rem'}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
</svg>
  )
  
 
  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }
  console.log(auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4">

        <div style={{ fontFamily: 'Oxygen, sans-serif' }} className="container-fluid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"

        data-bs-target="#navbarNavDropdown"

          aria-controls="navbarNavDropdown"

            aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>

      </button>
          <NavLink to="/home" className="nav-link">
            <img src={book1} alt="logo" style={{width: '3.2rem', height: '3.2rem', margin:'0.2rem'}} />
          </NavLink>
          <div style={{ fontFamily: 'Oxygen, sans-serif'}} className="collapse navbar-collapse flex-grow-0 " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tranding" className="nav-link">Trending</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              <div id="navy">
                <ul className="navbar-nav d-flex align-content-center flex-wrap nav">
                  <ul className="navbar-nav nav">
                    <li>
                      <NavLink to="/lang" className="nav-link">
                        
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/share" className="nav-link">
                        <div>{shareIcon}</div>
                      </NavLink>
                    </li>
                    
                    <li onClick={() => {openCart()}} style={{ position: 'relative' }}>
                        <span className="badge rounded-pill position-absolute top-0 start-60 translate-middle">{counter}</span>
                        <a className="nav-link text-dark h5" href="#">
                          <div>
                            <img src={shopIcon} style={{height: '1.5rem', width: '1.5rem'}} alt="img"/>
                          </div>
                        </a>
                    </li>
                   
                    <li>
                      {!auth ? (
                        <NavLink to="/login" className="nav-link">
                        <img src={avatarIcon} style={{height: '1.5rem', width: '1.5rem'}} alt="img"/>
                        </NavLink>
                      ) : (
                        <NavLink to="/profile" className="nav-link">
                          <div>
                            <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1700702270~exp=1700702870~hmac=d77b8a26171c68bf5185854f9983fb046e254a8b563995dbcf26bb950f0819ce" style={{height:'2rem',width:'2rem',borderRadius:'20%'}} alt="img"/>
                          </div>
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div onClick={() => {closeCart(); }}
          className={`sidebar-overlay ${isCartOpen ? "active" : ""}`}
        ></div>
        <SideCart isCartOpen={isCartOpen} handleClose={closeCart} />
      </div>
    </>
  );
};

export default Navbar;