import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Loading, Navbar, ProductDetail, Sidebar } from './components';
import { Cart, Header, Products } from './container';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useCallback, useEffect } from 'react';
import { useGetProductsQuery, useSendCartDataMutation } from './app/productAPI';
import { getAllProducts } from './app/cartSlice';

function App() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const [sendCartData, { isSuccess }] = useSendCartDataMutation();
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);

  const sendCart = useCallback(async () => {
    await sendCartData(cart).unwrap();
  }, [sendCartData, cart]);

  useEffect(() => {
    dispatch(getAllProducts(data));
  }, [data, dispatch]);

  useEffect(() => {
    sendCart();
  }, [sendCartData, sendCart]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Header />} />

        <Route
          path="/products"
          element={isLoading ? <Loading /> : <Products />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
