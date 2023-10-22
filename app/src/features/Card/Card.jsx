/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

const Card = ({ name, img, options, description }) => {

  const prices = Object.keys(options)
  console.log(prices);
  return (
    <div className={styles.card_container}>
      <img src={img} className={styles.card_thumbnail} />
      <h3 className={styles.card_title}>{name}</h3>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_infoflex}>
        <div className={styles.card_dropdown_container}>
          <select>
            {Array.from(Array(4), (ele, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select>
            {prices.map((ele) => (
              <option key={ele} value={ele}>{ele}</option>
            ))}
          </select>
        </div>
        <div className={styles.card_price_container}>₹ 200</div>
      </div>
    </div>
  );
};
export default Card;
