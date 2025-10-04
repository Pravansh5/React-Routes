import { Link, useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataProvider"

export default function  LandingPage(){
 const { items, loading, error } = useData();    
const navigate=useNavigate();

function handleNavigate(id){
    navigate()
}
return <>
    
    <h3>This is Landing Page!!!</h3>
    <h3>Products</h3>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>


    {items?.map((ele,i)=>(
        <div key={i}>
            <img width="100px"src={ele.image} alt="" />
            <p>Title : {ele.title}</p>
            <p>Price : {ele.price}</p>
            <Link to={`/products/${ele.id}`}>View Detail</Link>
        </div>
    ))}
    </div>
    </>
}