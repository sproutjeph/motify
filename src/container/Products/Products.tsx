import React from 'react';
import './Products.css';
import { Category, ProductItem } from '../../components';
import { useAppSelector } from '../../app/hooks';
const Products = () => {
  const products = useAppSelector((state) => state.cart.allProducts);
  return (
    <>
      <div>
        <div className="container my-4 py-5">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <Category />
          </div>
          <div className="row">
            {products.map((product) => (
              <ProductItem {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
