import React from 'react'
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";


function App() {
  return (
    <div >
    <Counter></Counter>
    <DecreaseCounter></DecreaseCounter>
    <IncreaseByTwoCounter></IncreaseByTwoCounter>
    <IncreaseCounter></IncreaseCounter>
    </div>
  );
}

export default App;
