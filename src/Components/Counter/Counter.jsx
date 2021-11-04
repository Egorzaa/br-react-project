import React, { useState } from "react";
import { withLoggerHOC } from "../../HOCS/withLoggerHOC";

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

export default withLoggerHOC(Counter);
