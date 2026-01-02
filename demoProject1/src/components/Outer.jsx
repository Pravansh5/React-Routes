import React from 'react'
import Inner from './inner'

function Outer({setCount,count}) {
  return (
<button onClick={()=>setCount(count-1)}>Decrease</button>
)
}
export default Outer