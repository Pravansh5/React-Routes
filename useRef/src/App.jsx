import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const focusRef=useRef(null);
  let prevCountRender=useRef(0)
  let countRender = useRef(1)


  function handleFocus(){
    // current(focusRef)
    focusRef.current.focus()
  }
  
  useEffect(()=>{
    prevCountRender.current=count
    countRender.current+=1;
    console.log(prevCountRender.current)
  })


  return (
    <>
      <input ref={focusRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
      <p>Count : {count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}> Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}> decrement</button>
    <p>prev render count :{prevCountRender.current}</p>
    <p>current crender count : {countRender.current}</p>
    </>
    
  )
}

export default App
