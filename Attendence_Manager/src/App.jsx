import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import FilterFuncationality from './components/FilterFuncationality';

function App() {
  const [students, setStudents] = useState([]);
  const arr=[
  { id: 1, name: "Aarav", present: true },
  { id: 2, name: "Neha", present: false },
  { id: 3, name: "Rohan", present: true },
  { id: 4, name: "Priya", present: false }
];
  useEffect(()=>{
    setStudents([...arr]);
  },[]);

  return (
    <>
      <div style={{display:"flex" ,padding:"40px" ,margin:"40px",gap:"100px"}}>
      <Home students={students} setStudents={setStudents}/>
      <FilterFuncationality students={students} />

      </div>
    </>
  )
}

export default App
