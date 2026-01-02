import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Outer from './components/outer'
import Inner from './components/inner'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("Component mount")
    //unmounted face
    return ()=>{console.log("component is un mount")}
  },[])
  useEffect(()=>{
    console.log("component re renders")
  })
  return (
    <>
    <p>Count: {count}</p>
     <Outer setCount={setCount} count={count}/>
     <Inner setCount={setCount} count={count}/>
    </>
  )
}

export default App
