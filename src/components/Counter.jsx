import "./Counter.css";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const handleChange = (value) => {
    setCounter(counter + value);
  };
  const handleDouble = (value) => {
    setCounter(counter * value);
  };
  return (
    <div>
      <h1 className="h1">Count: {counter}</h1>
      <button
        className="btn"
        onClick={() => {
          handleChange(1);
        }}
      >
        Add 1
      </button>
      <button
        className="btn"
        onClick={() => {
          handleChange(counter <= 0 ? 0 : -1);
        }}
      >
        Del 1
      </button>
      <button
        className="btn"
        onClick={() => {
          handleDouble(2);
        }}
      >
        Mul 2
      </button>
    </div>
  );
}
