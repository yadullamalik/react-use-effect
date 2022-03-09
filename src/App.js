import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Grocery } from "./components/Grocery";
import { Stopwatch } from "./components/Stopwatch";
import { Todo } from "./components/Todos";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Grocery /> */}

      {show ? <Stopwatch /> : ""}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
