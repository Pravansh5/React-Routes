import { useState,useReducer } from 'react'

function reducer(state,action){
  console.log(state)
  switch(action.type){
    case "INCREMENT":
      return {value:state.value+1};
    case "DECREMENT":
      return {value:state.value-1};
    case "RESET":
      return {value:0};
    default:
      throw new Error(`Action type is invalid`);
  }
  return state;
}

function Count() {
  const [count, dispatch] = useReducer(reducer,{value:0});
  

  return (
    <>
      <div>
        <p>Count : {count.value}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
      </div>
    </>
  )
}

export default Count
