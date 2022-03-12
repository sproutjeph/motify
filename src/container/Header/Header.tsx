import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './Header.css';
const Header = () => {
  return (
    <>
      <section className="header__section">
        <div className="header__hero">
          <div className="header__info">
            <h5 className="header__text">Wellcome to jeph's Motocycle store</h5>
            <p className="header__description">
              We sell all kinds of motocycle, Tricycle, and spare parts. Such as
              Honda Tvs Haoujne KC Sanya Daylong and many more. We are Here for
              you
            </p>
            <Link className="btn btn-primary mt-5 " to="/products">
              Go Shopping
            </Link>
          </div>

          <div className="">
            <img
              src={images.honda1}
              className="hero__img"
              alt="hero section img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
