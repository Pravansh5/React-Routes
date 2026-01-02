import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const {user,setUser,isAuthenticated}=useAuthContext();
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [error,setError]=useState("")
   
    if (isAuthenticated) {
   return <Navigate to="/dashboard"/>;
}

    function handleLogin(){
        if(password.length==0 ||userName.length==0){
            setError("Both fileds required!"); 
            return;   
        }
        localStorage.setItem("user",JSON.stringify({userName,password}));

        setUser({userName,password});



    }



  return (
    <div>
        <div>Login</div>
        <div>
            <input type="text" placeholder='UserName'  value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <p>Error : {error}</p>
        </div>


    </div>


  )
}

export default Login