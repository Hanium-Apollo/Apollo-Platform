import { ReactNode, createContext, useReducer } from "react";
import { UserInfo } from "../apis/UserServiceType";
import authReducer from "../reducers/authReducer";

export const defaultAuth: UserInfo = {
  id: "",
  login: "",
  username: "",
  email: "",
  avatar_url: "",
};

const AuthContext = createContext<{ auth: UserInfo; setAuth: React.Dispatch<Action> }>({
  auth: defaultAuth,
  setAuth: () => {}
});

type Action = { type: "SET_AUTH"; payload: UserInfo };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, dispatch] = useReducer(authReducer, defaultAuth);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
