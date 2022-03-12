import React from 'react';
import './ProductDetail.css';
import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addToCart, getCartTotal } from '../../app/cartSlice';
const ProductDetail = () => {
  let { id } = useParams();

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.allProducts);
  const product = products[Number(id)];

  const addToCartHandler = () => {
    const itemId = Number(id);
    dispatch(addToCart(itemId));
    dispatch(getCartTotal());
  };

  return (
    <div className="container py-5 ">
      <div className="row py-4">
        <div className="col-md-6">
          <img
            src={product.img}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>

          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating}
            <i className="fa fa-star"></i>
          </p>

          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark" onClick={addToCartHandler}>
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2 ps-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
