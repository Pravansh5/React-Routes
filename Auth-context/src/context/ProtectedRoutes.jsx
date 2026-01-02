import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const ProtectedRoute = ({children})=>{
    const {isAuthenticated} =useAuthContext();
    return isAuthenticated?children:<Navigate to="/"/>

}

export default ProtectedRoute;