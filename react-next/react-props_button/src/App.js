import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Clicked the button");
  }
  return (
    <Button
      color="blue"
      backgroundColor="white"
      disabled={false}
      text={"My Button"}
      handleClick={handleClick}
    />
  );
}

function Button({ color, backgroundColor, disabled, text, handleClick }) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
