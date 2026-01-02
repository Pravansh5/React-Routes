import { createContext, useContext, useState } from "react";

const LanguageContext=createContext(null);
export const LanguageContextProvider=({children})=>{
    const [language,setLanguage]=useState(()=>{
        let storedLanguage=JSON.parse(localStorage.getItem("language"));
        return storedLanguage||"english";
    });
    function toggleLanguage(){
        localStorage.setItem("language",JSON.stringify(language=="english"?"hindi":"english"))
        setLanguage(prev=>prev=="english"?"hindi":"english");

    }
    return<>
    <LanguageContext.Provider value={{language,toggleLanguage}}>
        {children}
    </LanguageContext.Provider>
    </>
}
export const useLanguageContext=()=> useContext(LanguageContext);