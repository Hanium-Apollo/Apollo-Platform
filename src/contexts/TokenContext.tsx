import { ReactNode, createContext, useState } from "react";

const TokenContext = createContext<{accessToken: string; setToken: React.Dispatch<React.SetStateAction<string>>}>({
    accessToken: "",
    setToken: () => {}
  })
  
  export const TokenProvider = ({ children }: { children: ReactNode }) =>{
    const[accessToken, setToken] = useState<string>("");
    
    return (
      <TokenContext.Provider value={{ accessToken, setToken }}>
        {children}
      </TokenContext.Provider>
    )
}

export default TokenContext;