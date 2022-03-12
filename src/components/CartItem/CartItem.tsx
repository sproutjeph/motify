import './CartItem.css';
import { IProduct } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { decreaseAmount, increaseAmount } from '../../app/cartSlice';

const CartItem = ({ img, price, amount, title, id }: IProduct) => {
  const dispatch = useAppDispatch();

  function incHandler() {
    dispatch(increaseAmount(id));
  }
  function decHandler() {
    dispatch(decreaseAmount(id));
  }

  return (
    <>
      <div className="container cart-container">
        <img src={img} alt={title} />
        <div className="info">
          <h4>{title}</h4>
          <h4>$ {price}</h4>
          <h4> motocycle</h4>
          <div className="buttons">
            <button className="btn btn-outline-danger " onClick={decHandler}>
              <i className="fa fa-minus"></i>
            </button>
            <span className="ms-4 text-info fw-bolder">{amount}</span>
            <button
              className="btn btn-outline-success ms-4"
              onClick={incHandler}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
