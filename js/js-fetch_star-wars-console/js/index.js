// import { renderElement } from "./utils.js";
console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    var data = await response.json();
    var result = data.results;
    console.log(result[7].eye_color);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// const p = document.createElement("p");
// p.textContent = result[7].eye_color;
// renderElement(p);
// console.log(p);
