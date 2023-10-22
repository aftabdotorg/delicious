import "./Auth.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h2 className="auth_heading">Join Delicious</h2>
      <form className="form_container">
        <input type="text" placeholder="enter name" />
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Sign up" />
        <p>
          Already a member? <NavLink to="/signin" className="no_decoration_links">Sign in</NavLink>{" "}
        </p>
      </form>
    </>
  );
};
export default Signup;
