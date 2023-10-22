import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_flexbox}>
        <NavLink to="/" className={styles.no_decoration}>
          <li id={styles.logo_box}>Delicious</li>
        </NavLink>
        <NavLink to="/" className={styles.no_decoration}>
          <li>Home</li>
        </NavLink>
      </div>
      <div className={styles.nav_flexbox} >
        <NavLink to="/signin" className={styles.no_decoration}>
          <li>Sign in</li>
        </NavLink>
        <NavLink to="/signup" className={styles.no_decoration}>
          <li>Sign up</li>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
