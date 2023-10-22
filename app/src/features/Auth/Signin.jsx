import { NavLink } from "react-router-dom";
import "./Auth.css";

const Signin = () => {
  return (
    <>
      <h2 className="auth_heading">Sign in</h2>
      <form className="form_container">
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <input type="submit" value="Sign in" />
        <p>
          New to Delicious? <NavLink to="/signup" className="no_decoration_links">Sign up</NavLink>{" "}
        </p>
      </form>
    </>
  );
};
export default Signin;
