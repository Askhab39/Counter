import React from "react"
import { useEffect } from "react";
import './index.scss';
function App() {
  let [count, setCount] = React.useState(Number(localStorage.getItem('counter')) || 0)

  let onClickPlus = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    localStorage.setItem('counter', count)
  }, [count])

  let onClickMinus = () => {
    if (count < 1) {
      setCount(count = 0)
    } else {
      setCount(count - 1)
    }
  }

  let onClickZero = () => {
    setCount(count = 0)
  }

  useEffect(()=>{
    localStorage.setItem('counter', count)
  }, [count])

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickZero} className="zero">Сброс</button>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}
export default App;