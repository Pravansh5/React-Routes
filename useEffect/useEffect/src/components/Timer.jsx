import { useState,useEffect } from "react"
function Timer(){
    const [count,setCount]=useState(0);
    const [timer,setTimer]=useState(0)

    useEffect(()=>{
        const interval= setInterval(()=>{
            setTimer(prev=>prev+1);
            console.log(`${timer}`)
            
        },1000)
        console.log("Component mount")
        
        return ()=>{
            console.log("component unmount")
            clearInterval(interval)
        }
    },[])
    return <><div>Count:={timer}</div></>
}
export default Timer