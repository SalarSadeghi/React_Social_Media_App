import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log("user: ", user);
  console.log("isFetching: ", isFetching);
  console.log("error: ", error);
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
              name="email"
              ref={email}
              required
              type="email"
              className="loginInput"
              placeholder="Email"
            />
            <input
              name="password"
              ref={password}
              required
              minLength="8"
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <button type="submit" className="loginBtn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to='/register' className="loginRegisterBtn">
              <button type="button" className="loginRegisterBtnText" disabled={isFetching}>
                Create a new account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
