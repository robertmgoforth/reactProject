// THIS FILE OUTPUTS TO THE ROOT DIV IN INDEX.HTML

import { useState } from "react";

// importing global style
import "./App.css";

import Heading from "./Heading.jsx";

// this function runs the whole App() function which then fills the index.html page
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Heading />
      <h1>Robert's React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
