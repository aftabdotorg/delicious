import { NavLink, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        credentials
      );
      console.log("Login successful:", response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Login failed:", error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <>
      <h2 className="auth_heading">Log in</h2>
      <form className="form_container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          onChange={handleChange}
          name="email"
          value={credentials.email}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={handleChange}
          name="password"
          value={credentials.password}
        />
        <input type="submit" value="Log in" />
        <p>
          New to Delicious?{" "}
          <NavLink to="/signup" className="no_decoration_links">
            Sign up
          </NavLink>{" "}
        </p>
      </form>
    </>
  );
};
export default Login;
