import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> meow</Button>
      <Button>moaaaw </Button>
      <Button>Miooooo </Button>
      <Button> mEEiiooow</Button>
    </main>
  );
}

function Button(children) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
