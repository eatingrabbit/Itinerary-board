import { createContext, useState } from "react";

export const SelectedTagListContext=createContext(null);

export const SelectedTagListContextProvider=({children})=>{
    const [selectedTagList, setSelectedTagList]=useState([]);
    
    return(
        <SelectedTagListContext.Provider value={{selectedTagList: selectedTagList, setSelectedTagList: setSelectedTagList}}>{children}</SelectedTagListContext.Provider>
    );
};