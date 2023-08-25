import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordAgainRef.current.value) {
      passwordAgainRef.current.setCustomValidity("Passwords dont match.");
    } else {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      try {
        const res = await axios.post("http://localhost:3001/register", user);
        if (res.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Solagram</h3>
          <span className="loginDesc">
            Connect with frinds and the world around you on Solagram
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              required
              className="loginInput"
              placeholder="Username"
              ref={usernameRef}
            />
            <input
              required
              type="email"
              className="loginInput"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              required
              type="password"
              className="loginInput"
              placeholder="Password"
              ref={passwordRef}
              minLength="8"
            />
            <input
              required
              type="password"
              className="loginInput"
              placeholder="Password again"
              ref={passwordAgainRef}
            />
            <button type="submit" className="loginBtn">
              Sign Up
            </button>
            <Link to="/login" className="loginRegisterBtn">
              <button type="button" className="loginRegisterBtnText">Log into account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
