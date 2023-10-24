import { useCartContext, useCartDispatch } from "../../Context/Context";
import Styles from "./Cart.module.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const CartItems = useCartContext();
  const dispatch = useCartDispatch();
  const totalPrice = CartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className={Styles.cart_container}>
      <h1 className={Styles.cart_heading}>Cart</h1>
      <div className={Styles.cart_action_btns_container}>
        <NavLink to="/" className={Styles.no_link_deco}>
          <div className={Styles.cart_action_btn}>Back to products</div>
        </NavLink>
        <div className={Styles.cart_action_btn}>Cart items ({CartItems.length})</div>
        <button
          className={Styles.cart_action_btn}
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
        >
          Clear cart
        </button>
      </div>
      <table className={Styles.cart_table_container}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Size</td>
            <td>Quantity</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {CartItems.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>
                <span
                  className="material-symbols-outlined"
                  id={Styles.delete_icon}
                  onClick={() => {
                    dispatch({ type: "REMOVE", index: i });
                  }}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total</td>
            <td>₹ {totalPrice}/-</td>
          </tr>
        </tfoot>
      </table>

      <center>
        <button className={Styles.cart_checkout_btn}>Checkout</button>
      </center>
    </section>
  );
};
export default Cart;
