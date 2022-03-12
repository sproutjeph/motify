import React from 'react';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../../types';
import './ProductItem.css';

const ProductItem = ({ img, price, title, id, category }: IProduct) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100 text-center p-4">
          <img
            src={img}
            className="card-img-top"
            alt=""
            // height="250px"
            width=""
          />
          <div className="card-body">
            <h5 className=" mb-0">{title}</h5>
            <p className="card-text">$ {price}</p>
            <NavLink to={`/products/${id}`} className="btn btn-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
