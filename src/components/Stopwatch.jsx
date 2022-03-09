import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev >= 10) {
          clearInterval(id);
          return 10;
        }
        return prev + 1;
      });
    }, 1000);
    return ()=>{
        clearInterval(id)
    }
  }, []);

  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  );
};
