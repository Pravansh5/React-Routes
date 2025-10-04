import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetails(){
    const {id}=useParams();
    const [prod,setProd]=useState(null)
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)

    async function fetchProd(){
        try{
            setLoading(true);
            let res=await fetch(`https://fakestoreapi.com/products/${id}`)
            let data=await res.json();
            console.log(data);
            setProd(data);
        }catch(error){
            setError(error.message||"Failed to fetch");
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{

        fetchProd()
    },[])
    if(loading) return <h3>Loading....</h3>
    if(error) return <h3>{error}</h3>
    if(!prod) return null
    return <>
    <div>
    <img width="300px" src={prod.image} alt="" /> 
    <p>Title {prod.title}</p>
    <p>Price : {prod.price}</p>
    <p>Description : {prod.description}</p>
    </div>
    </>
}