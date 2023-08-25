import { Navigate, Route, Routes, redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" replace={true} />}
        />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace={true} /> : <Login />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/" replace={true} /> : <Register />
          }
        />
      </Routes>
    </>
  );
}

export default App;
