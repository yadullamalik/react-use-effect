import { useEffect, useState } from "react";

export const Todo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("Before");
  useEffect(() => {
    console.log("Inside 1");
  }, [count1]);
  useEffect(() => {
    console.log("Inside 2");
  }, [count2]);
  console.log("After");
  return (
    <div>
      Todo:
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Add to 1
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Add to 2
      </button>
    </div>
  );
};
