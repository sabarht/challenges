import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [holiday, setHoliday] = useState("");
  let [date, setDate] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const holidayInput = event.target.holiday.value;
    const dateInput = event.target.date.value;
    setHoliday(holidayInput);
    setDate(dateInput);
    event.target.reset();
    event.target.holiday.focus();
  };
  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
