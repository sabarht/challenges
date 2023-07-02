import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={23} valueB={23} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return <div>{sum}</div>;
}
