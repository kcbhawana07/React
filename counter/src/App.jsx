import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(15)

  // let counter=15;
  let addValue=()=>{
    console.log("ValueAdded",counter);
    counter=counter+1;
    setCounter(counter)
   
  }
  let removeValue=()=>{
    console.log("Valueremoved",counter);
    setCounter(counter-1)
  }

  return (
    <>
    <h1>React</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}>
      Add Value{counter}</button><br/>
    <button
    onClick={removeValue}
    >Remove Value{counter}</button>
    <p>footer:{counter}</p>
    
          </>
  )
}

export default App
