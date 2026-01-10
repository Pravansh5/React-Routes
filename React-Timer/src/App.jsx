import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [timer, setTimer] = useState({hours:0,minutes:0,seconds:0})
  const [status,setStatus]=useState("stopped")
  useEffect(()=>{
    let timerId=null;
    if(status=="running"){
      let sec=Number(timer.seconds)
      let min=Number(timer.minutes)
      let hr=Number(timer.hours)
      timerId=setInterval(()=>{
        sec+=1;
        if(sec>=60){
          min+=1;
          sec=0;
          if(min>=60){
            hr+=1;
            min=0;
          }
        }
        setTimer({hours:hr,minutes:min,seconds:sec})
      },1000)
    }
    else{
      clearInterval(timerId)
    }
      return ()=>clearInterval(timerId);

  },[status])
  function handleReset(){

    setTimer({hours:0,minutes:0,seconds:0})
    setStatus("stopped")
  }
  function handleStart(){
    setStatus("running")
  }
  function handleStop(){
    setStatus("stopped")
    
  }

  return (
    <>
      <div>
        <div>
          <input disabled={status=="running"?true:false} type="text" value={timer.hours}  onChange={(e)=>setTimer({...timer,hours:e.target.value})}/>
          <input disabled={status=="running"?true:false} type="text" value={timer.minutes}  onChange={(e)=>setTimer({...timer,minutes:e.target.value})}/>
          <input disabled={status=="running"?true:false} type="text"  value={timer.seconds} onChange={(e)=>setTimer({...timer,seconds:e.target.value})}/>
        </div>
        <div>
          <button  onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
