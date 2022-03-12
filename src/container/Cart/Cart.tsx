import React, { useEffect } from 'react';
import './Cart.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CartItem } from '../../components';
import { getTotalPrice, getCartData } from '../../app/cartSlice';
import { useGetCartItemsQuery } from '../../app/productAPI';
import { IProduct } from '../../types';
const Cart = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCartItemsQuery();
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const itemsInCart: IProduct[] = [];

  for (const key in data) {
    // @ts-ignore
    const product = [...data[key]];
    itemsInCart.push(...product);
  }
  console.log(itemsInCart);

  useEffect(() => {
    dispatch(getCartData(itemsInCart));
  }, [data]);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cart]);

  return (
    <section className="cart">
      <div className="cart-header">
        <h2>your Cart</h2>
        <div className="cart__total">
          <span>Total </span>
          <span className="price">
            <small className="small">$</small>
            {totalPrice}
          </span>
        </div>
      </div>
      {cart.map((prod) => (
        <CartItem key={prod.id} {...prod} />
      ))}
    </section>
  );
};

export default Cart;
