import { Link } from "react-router-dom";

export default function Nav(){
    return <>
   <nav >
    <Link style={{padding:"20px"}} to="/">Home</Link>
    <Link style={{padding:"20px"}} to="/contact">Contact</Link>
    <Link style={{padding:"20px"}} to="/about">About</Link>
   </nav>

    
    </>
}