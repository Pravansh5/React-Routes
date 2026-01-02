import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visible,setVisible]=useState(true);
  function toggleVisivility(){
    setVisible(prev=>!prev);
  }
  return (
  <>
  {visible &&  <h3>Hare Krishna</h3> }
    <button onClick={toggleVisivility}>{visible?"Hide Text":"Show Text"}</button>
   </>)
  
}

export default App