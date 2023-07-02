import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  let [value, setValue] = useState(0);
  function increment() {
    return setValue(value++);
  }
  function decrement() {
    return setValue(value--);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
