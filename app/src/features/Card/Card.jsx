import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=962&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="thumbnail"
        className={styles.card_thumbnail}
      />
      <h3 className={styles.card_title}>Title</h3>
      <p className={styles.card_description}>description</p>
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
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
        </div>
        <div className={styles.card_price_container}>₹ 200</div>
      </div>
    </div>
  );
};
export default Card;
