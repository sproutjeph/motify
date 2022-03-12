import React from 'react';
import { Link } from 'react-router-dom';
import { closeSidebar } from '../../app/cartSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import './Sidebar.css';
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.cart.isSidebarOpen);

  function close() {
    dispatch(closeSidebar());
  }
  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar shadow-lg p-4 show' : 'sidebar shadow-lg p-4'
      }`}
    >
      <button className="btn btn-outline-danger" onClick={close}>
        <i className="fa fa-times"></i>
      </button>
      <nav className="row py-5">
        <Link className="btn my-4" to="/" onClick={close}>
          Home
        </Link>
        <Link className="btn my-4" to="/products" onClick={close}>
          Products
        </Link>
        <Link className="btn my-4" to="/" onClick={close}>
          About
        </Link>
        <Link className="btn my-4" to="/" onClick={close}>
          Contact us
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
