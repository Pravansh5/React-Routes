import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer';

function App() {
  const[showTimer,setShowTimer]=useState(false);
  // function

 

  
  // useEffect(()=>{
    
  // },[]);

  
  return (
    <>
    {showTimer&& <Timer/>}

    <button onClick={()=>setShowTimer(!showTimer)}>ShowTimer</button>
    </>
  )
}

export default App
