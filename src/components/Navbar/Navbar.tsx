import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login, logout } from '../../app/authSlice';
import { getCartTotal, openSidebar } from '../../app/cartSlice';
const Navbar = () => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const cartTotal = useAppSelector((state) => state.cart.nuOfItemsInCart);
  const cart = useAppSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              Jeph Motocycle
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                onClick={() => dispatch(openSidebar())}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                {isAuthenticated ? (
                  <NavLink
                    to="/"
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fa fa-sign-in me-1"></i> Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/"
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(login())}
                  >
                    <i className="fa fa-sign-in me-1"></i> Login
                  </NavLink>
                )}

                <NavLink to="/auth" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i> Regsiter
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> Cart({cartTotal})
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
