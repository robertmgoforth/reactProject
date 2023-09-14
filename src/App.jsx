// THIS FILE OUTPUTS TO THE ROOT DIV IN INDEX.HTML

import { useState } from "react";

// importing global style
import "./App.css";

import NavBar from "./NavBar.jsx";
import Counting from "./Counting.jsx";

// this function runs the whole App() function which then fills the index.html page
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <NavBar />
      <h1>Robert's React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Counting count={count}/>
    </>
  );
}

export default App;
