import React, { useEffect } from 'react';
import './Category.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { filterProducts, getCategories } from '../../app/cartSlice';

const Category = () => {
  const dispatch = useAppDispatch();

  const allCategories = useAppSelector((state) => state.cart.allCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div className="container mb-5">
        <div className="row justify-content-center gx-0">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className="btn btn-outline-dark me-2 mx-2 my-2 col"
              style={{ height: '3.5rem', maxWidth: '8rem' }}
              onClick={() => dispatch(filterProducts(category))}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
