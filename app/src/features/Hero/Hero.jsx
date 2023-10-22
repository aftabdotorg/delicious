import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero_container}>
      <form className={styles.search_container}>
        <input type="text" placeholder="search burger" name="q" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default Hero;
