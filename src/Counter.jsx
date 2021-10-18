import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./App.css";
import { usePrevious } from "./usePrevious";

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const previous = usePrevious(count);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const someFunc = useCallback(() => {}, []);

  const elem = useMemo(() => {
    // huge calculations
  }, []);

  console.log(previous, elem);

  return (
    <div>
      <p>{count}</p>

      <button onClick={handleClick} ref={ref}>
        Click me
      </button>
      <button onClick={someFunc}>Click</button>
    </div>
  );
};

export default Counter;
