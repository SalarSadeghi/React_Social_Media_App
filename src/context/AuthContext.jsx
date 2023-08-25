import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    id: 10,
    profilePicture: "person/10.jpeg",
    username: "Salar Sadeghi",
    email: "salar@gmail.com",
    password: "$2a$10$A1dsSAq8kvRG.uidg2MiveAlhQS9jKGJ.WZVG37liPpBnv4h.VJr2",
    coverPicture: "post/3.jpeg",
    followers: "",
    followings: "",
    isAdmin: "false",
    desc: "",
    city: "London",
    from: "Manchester",
    relationship: "",
  },
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
