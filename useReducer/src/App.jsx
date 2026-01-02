import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './components/FetchData'
// demo={id:null,task:null,isCompleted:false}
function App() {
  // const [todo,dispatch]=useReducer(reducer,[]);
  // const [count,setCount]=useState(0);

  return (
    <>
<FetchData/>    
</>
  )
}

export default App
