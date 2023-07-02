import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  function increment() {
    return setCount(count++);
  }
  function decrement() {
    return setCount(count--);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
