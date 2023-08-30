// THIS FILE OUTPUTS TO THE ROOT DIV IN INDEX.HTML

import { useState } from "react";

// importing global style
import "./App.css";


import Clouds from "./Clouds.jsx";
// import { Clouds, moreStuff } from "./Clouds.jsx"  EXAMPLE OF MULTI IMPORT
import Greeter from "./Greeter.jsx";
import Dice from "./Dice.jsx";
import Lister from "./Lister.jsx";
import Luck from "./Luck.jsx";
import { Pokemans } from "./Pokemans.jsx";
import WelcomeMessage from "./Name.jsx";
// import { MigrationHubOrchestrator } from "aws-sdk";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots.jsx";
import { GL } from "./GroceryList.jsx";


const data = [
  { item: "eggs", quantity: 12, completed: false },
  { item: "milk", quantity: 6, completed: true },
  { item: "bread", quantity: 3, completed: false },
  { item: "cheese", quantity: 2, completed: false },
  { item: "pizza", quantity: 4, completed: true },
];

// this function runs the whole App() function which then fills the index.html page
function App() {
  const [count, setCount] = useState(0);

  //Using this for input changes to the name form
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <GL items={data}/>
      <Slots val1="a" val2="a" val3="a" />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <Heading color="pink" text="REACT" fontSize="130px" />
      {/* form for instant name input/output */}
      <form>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
      </form>
      <WelcomeMessage name={name} />
      <Greeter name="Friend" from="Anon" />
      <Luck />
      <Pokemans />
      <h1>Robert's React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Clouds />
      <Dice numSides={18} />
      <Dice numSides={12} />
      <Dice />
      <Lister values={[1, 2, 3, " a ", "b ", "c "]} />
      <Lister values={[4, 5, 6, " d ", "e ", "f "]} />
    </>
  );
}

export default App;
