import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_flexbox}>
        <NavLink to="/" className={styles.no_decoration}>
          <li id={styles.logo_box}>Delicious</li>
        </NavLink>
        <NavLink to="/" className={styles.no_decoration}>
          <li>Home</li>
        </NavLink>
        {localStorage.getItem("authToken") ? (
          <NavLink to="/" className={styles.no_decoration}>
            <li>My orders</li>
          </NavLink>
        ) : (
          ""
        )}
      </div>
      {!localStorage.getItem("authToken") ? (
        <div className={styles.nav_flexbox}>
          <NavLink to="/login" className={styles.no_decoration}>
            <li>Log in</li>
          </NavLink>
          <NavLink to="/signup" className={styles.no_decoration}>
            <li>Sign up</li>
          </NavLink>
        </div>
      ) : (
        <div className={styles.nav_flexbox}>
          <NavLink to="/login" className={styles.no_decoration}>
            <li>Cart</li>
          </NavLink>

          <NavLink
            to="/login"
            onClick={handleLogout}
            className={styles.no_decoration}
          >
            <li>Logout</li>
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
