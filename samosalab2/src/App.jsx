
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

const updateCount = () => {
  setCount((prevCount)=>prevCount + multiplier)
}

const buyDoubleStuffed= () => {
  if (count >=10){
  setMultiplier((prevMultiplier) => prevMultiplier * 2)
 setCount(count - 10)  // // reduce the count by 10 after purchase upgrade
}
}

const buyPartyPack = ()=>{
  if (count >=100){
  setMultiplier((prevMultiplier) => prevMultiplier * 5)
  setCount(count - 100)

}
}

const buyFullFeast = ()=> {
  if (count >= 1000){
  setMultiplier((prevMultiplier) => prevMultiplier * 10)
  setCount(count - 1000)
}
}
  return (
   <div className='App'>
   <div className='header'>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img className='samosa' src='/public/assets/samosaa.webp' onClick={updateCount}></img>
    </div>

    <div className='container'>
      <UpGrade
        title="Double Stuffed 👯‍♀️"
        description="2x per click"
        buttonText="10 samosas"
        onClick={buyDoubleStuffed}
      />
      
    

    
      <UpGrade
        title="Party Pack 🎉"
        description="5x per click"
        buttonText="100 samosas"
        onClick={buyPartyPack}
      />
      
  

    
      <UpGrade
        title="Full Feast 👩🏽‍🍳"
        description="10x per click"
        buttonText="1000 samosas"
        onClick={buyFullFeast}
      />
      
   </div>



   </div>
  )
}

const UpGrade =({title, description, buttonText, onClick}) => {
  return (
    <div className='upgrade'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default App






/* feat: Implement clicker upgrades and multiplier system for Samosa Selector
added a few comments
Added initial state management with count and multiplier using useState.
Created click handler (updateCount) to increase count by the multiplier.
Implemented upgrade functionality:
buyDoubleStuffed: Multiplies clicks by 2 if count >= 10, reducing count by 10.
buyPartyPack: Multiplies clicks by 5 if count >= 100, reducing count by 100.
buyFullFeast: Multiplies clicks by 10 if count >= 1000, reducing count by 1000.
Created reusable UpGrade component for the upgrade buttons.
Added Samosa image click functionality to increment count.
Updated App.css for layout and styling.*/ 