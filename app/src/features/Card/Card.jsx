/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import styles from "./Card.module.css";
import { useCartContext, useCartDispatch } from "../../Context/Context";
import { useEffect } from "react";

const Card = ({ id, name, img, options, description }) => {
  const dispatch = useCartDispatch();
  const cartState = useCartContext();
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const prices = Object.keys(options);

  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id, name, img, qty, size, price });
  };
  
  let price = qty * parseInt(options[size]);
  
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  
  console.log(cartState);
  return (
    <div className={styles.card_container}>
      <img src={img} className={styles.card_thumbnail} />
      <h3 className={styles.card_title}>{name}</h3>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_infoflex}>
        <div className={styles.card_dropdown_container}>
          <select onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(4), (ele, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {prices.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.card_price_container}>₹ {price}</div>
      </div>
      <div className={styles.btn_container}>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};
export default Card;
