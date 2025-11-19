import React, { useState } from 'react'
import './index.css';
function Todo() {
    const [set,setvalues]=useState('');
const [value,setvalue]=useState([
]);
 function add(){
setvalue([...value,set]);
setvalues('');

 }
  return (
    <div id='div'>
   <h2>Todo</h2>
   <div id='flex'> 
    <input type="text"  id='input'  onInput={(e)=>setvalues(e.target.value)} />
    <button id='button' onClick={add}>+</button>
   </div>
   <div id='map'>
    {
        value.map((val,index)=>{
            return <div  key={index}>
                <h1>{val}</h1>
                <br />
            </div>
        })
    }
   </div>
    </div>
  )
}

export default Todo