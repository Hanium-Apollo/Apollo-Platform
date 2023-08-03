import { ReactNode, createContext, useState } from "react";
import { UserInfo } from "../apis/UserServiceType";

export const defaultAuth: UserInfo = {
  id: "",
  login: "",
  username: "",
  email: "",
  avatar_url: "",
};

const AuthContext = createContext<{ auth: UserInfo; setAuth: React.Dispatch<React.SetStateAction<UserInfo>> }>({
  auth: defaultAuth,
  setAuth: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<UserInfo>(defaultAuth);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext;
