
import { useState } from 'react'
import './App.css'

function App() {
const [set,getset]=useState(0);
function Click(){
  getset(set+1);
  return
}
function Minus(){
  if(set>0){
getset(set-1);
  }
  
  return
}
  return (
    <>
   <h1>hello</h1>
   {set}
  {/* {
  set ==0 ? <button onClick={()=>(getset(set+1))}>+</button> :   <button onClick={()=>(getset(set-1))}>-</button>
  } */}
   <button onClick={Click}>+</button>
   <button onClick={Minus}>-</button>
    </>
  )
}

export default App
