import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  const [handleIncrement] = () => setCount(count + 1);
  const [handleDecrement] = () => setCount(count - 1);

  return (
    <div>
      <h1>The count is: {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
