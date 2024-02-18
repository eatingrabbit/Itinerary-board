import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider=({children})=>{
    const [user, setUser]=useState(null);
    
    return(
        <UserContext.Provider value={{user: user, setUser: setUser}}>{children}</UserContext.Provider>
    );
};
