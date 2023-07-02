import React from "react";
import "./styles.css";

export default function App() {
  return <Article></Article>;
}
function Article() {
  return (
    <article className="article">
      <h2 className="article__title"></h2> <label htmlFor="inputField"></label>{" "}
      <input id="inputField" name="inputField" />
      <a className="article__link" href="https://www.crazygames.com/t/cat">
        Link
      </a>
    </article>
  );
}
