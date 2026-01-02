import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("red")
  useEffect(()=>{
    if(color=="red"){
      setTimeout(()=>{
        setColor("yellow")
      },5000)
    }else if(color=="yellow"){
      setTimeout(()=>{
        setColor("green")
      },2000)
    }else{
      setTimeout(()=>{
        setColor("red")
      },3000)
    }
  },[color])
  return (
    <>
      <div>Traffic Light simulator</div>
      <div style={{width:"100px", height:"100px", borderRadius:"50%",backgroundColor:`${color=="red"?color:"black"}`}}>Red</div>
      <div style={{width:"100px", height:"100px", borderRadius:"50%",backgroundColor:`${color=="yellow"?color:"black"}`}}>Yellow</div>
      <div style={{width:"100px", height:"100px", borderRadius:"50%",backgroundColor:`${color=="green"?color:"black"}`}}>Green</div>
    </>
  )
}

export default App
