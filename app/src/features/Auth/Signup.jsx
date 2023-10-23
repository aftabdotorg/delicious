import { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup",
        credentials
      );
      if (response.data.status === 202) {
        alert(response.data.message);
        setCredentials({
          name: "",
          email: "",
          location: "",
          password: "",
        });
      } else {
        navigate("/login");
        console.log("Sign-up successful:", response);
      }
    } catch (error) {
      if (error.response) {
        console.error("Sign-up failed:", error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <>
      <h2 className="auth_heading">Join Delicious</h2>
      <form className="form_container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          onChange={handleChange}
          name="name"
          value={credentials.name}
        />
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
        <input
          type="text"
          placeholder="enter location"
          onChange={handleChange}
          name="location"
          value={credentials.location}
        />
        <input type="submit" value="Sign up" />
        <p>
          Already a member?{" "}
          <NavLink to="/login" className="no_decoration_links">
            Log in
          </NavLink>{" "}
        </p>
      </form>
    </>
  );
};
export default Signup;
