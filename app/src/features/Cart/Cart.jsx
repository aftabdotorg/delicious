import { useCartContext } from "../../Context/Context";
import Styles from "./Cart.module.css";

const Cart = () => {
  const CartItems = useCartContext();
  const totalPrice = CartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className={Styles.cart_container}>
      <h1 className={Styles.cart_heading}>Cart</h1>
      <div className={Styles.cart_action_btns_container}>
        <div className={Styles.cart_action_btn}>Back to products</div>
        <div className={Styles.cart_action_btn}>Cart items (0)</div>
        <button className={Styles.cart_action_btn}>Clear cart</button>
      </div>
      <table className={Styles.cart_table_container}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Size</td>
            <td>Quantity</td>
            <td>Price</td>
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
