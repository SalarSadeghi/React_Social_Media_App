import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./context/AuthActions";

const loginCall = async (userCredential, dispatch) => {
  dispatch(loginStart(userCredential));
  try {
    const res = await axios.post("http://localhost:3001/login", userCredential);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data.user));
    }
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export { loginCall };
