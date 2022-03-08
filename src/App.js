import "./App.css";
import { Counter } from "./components/Counter";
import { Grocery } from "./components/Grocery";
import { Todo } from "./components/Todos";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Grocery />
    </div>
  );
}

export default App;
