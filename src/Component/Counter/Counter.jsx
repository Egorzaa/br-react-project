import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <p>{count}</p>

      <button onClick={handleClick}>Click me</button>
    </>
  );
};
