import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [step,setStep]=useState(0)
  const [history,setHistory]=useState([]);

  useEffect(() => {
    const handleKey=(e)=>{
      if(e.key==="ArrowUp") increment();
      if(e.key==="ArrowDown") decrement();
    }
    window.addEventListener('keydown', handleKey);
return () => window.removeEventListener('keydown', handleKey);
  },[]);
  useEffect(()=>{
    const savedCount=localStorage.getItem('count');
    if(savedCount){
      setCount(Number(savedCount));
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("count",count);
  },[count])
  function increment(){
      setCount(prevCount => {
      const newCount = prevCount + step;
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  }
  function decrement(){
     setCount(prevCount => {
      const newCount = prevCount - step;
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  }
  function reset(){
    setCount(0);
    setHistory([]);  }
  function handleSteps(e){
    console.log(e);
    setStep(Number(e.target.value))
  }
  return (
   <>
   <h3>Count : {count}</h3>
   <label htmlFor="steps">Steps : </label>
   <input type="number" name="steps" value={step} onChange={(e)=>handleSteps(e)} />
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Dectement</button>
   <button onClick={reset}>Reset</button>
    <div>
      <h3>Steps</h3>
      {history.map((ele,ind)=>(
        <ul>
          <li key={ind}>
           values:  {ele}
          </li>
        </ul>
      ))}
    </div>

   
   
   </>
  )
}

export default App
