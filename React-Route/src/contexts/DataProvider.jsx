import {  createContext, useContext, useEffect, useState } from "react";

const dataContext=createContext()

export function DataProvider({children}){
    const [data,setData]=useState({items:null,error:null,loading:false});

    async function fetchData(){
        setData(prev=>({...prev,loading:true}))
        try{

            let res=await fetch('https://fakestoreapi.com/products');
            let data1=await res.json();

            // console.log("data",data1[0])
            setData(prev=>({...prev,items:data1}))
        }catch(error){
            setData(prev=>({...prev,error:error.message||"Failder to fetch"}))

        }finally{
            setData(prev=>({...prev,loading:false}));

        }
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return <>
    
    <dataContext.Provider value={{ 
      items: data.items, 
      error: data.error, 
      loading: data.loading 
    }}>
        {children}
    </dataContext.Provider>
    </>
}

export const useData=()=>useContext(dataContext);

