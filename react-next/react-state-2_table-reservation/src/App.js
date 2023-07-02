import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleAddPerson = () => {
    setPeople(people + 1);
  };n
  const handleSubtractPerson = () => {
    setPeople(people - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddPerson={handleAddPerson}
        onSubtractPerson={handleSubtractPerson}
      />

      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
