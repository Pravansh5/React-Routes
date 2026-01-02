import React from 'react'

function Inner({setCount,count}) {

  return (
    <>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}

export default Inner