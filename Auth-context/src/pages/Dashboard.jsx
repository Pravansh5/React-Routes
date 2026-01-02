import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const {user,logout}=useAuthContext();
    // if(!user){
    //     return <Navigate to="/"/>
    // }

  return (
    <div>
        <div>Dashboard</div>
        <div>
            <h2>
                User Details
            </h2>
            <h3>User name : {user.userName}</h3>
        </div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard