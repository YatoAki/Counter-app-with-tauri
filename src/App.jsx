import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  
  const [count,setCount] = useState(0)

  const increaseBtnClick = () => {
    setCount(count+1)
  }

  const decreaseBtnClick = () => {
    count != 0 ? setCount(count-1) : null
    
  }

  return (
    <div className="container">
      <h1>Count the heck out of it!</h1>
      <h3>{count}</h3>
      <div className="btnContainer">
        <button onClick={increaseBtnClick}>+</button>
        <button onClick={decreaseBtnClick}>-</button>
      </div>
    </div>
  );
}

export default App;
