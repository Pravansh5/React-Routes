import { createContext,useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";


const AuthContext=createContext(null);
export const AuthProvider=({children})=>{
    const navigate=useNavigate()
    const [isAuthenticated,setIsAuthenticated]=useState(
        !!localStorage.getItem("user")
    )

    const [user,setUser]=useState(()=>{
            let data=JSON.parse(localStorage.getItem("user"));
            if(data) return data;
            else return {userName:"",password:""}
        });
    function logout(){
        setUser({userName:"",password:""});
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        navigate("/")
    }
    return <AuthContext.Provider value={{user,logout,setUser,isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}
export const useAuthContext=()=>useContext(AuthContext);
