import { ReactNode, createContext, useReducer } from "react";
import tokenReducer from "../reducers/tokenReducer";

const TokenContext = createContext<{ accessToken: string; setToken: React.Dispatch<Action> }>({
  accessToken: "",
  setToken: () => {}
});

type Action = { type: "SET_TOKEN"; payload: string };

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, dispatch] = useReducer(tokenReducer, "");

  return (
    <TokenContext.Provider value={{ accessToken, setToken: dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
