import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle></HelloWorldArticle>;
}
function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello</h1>
      <p>Meow Meow</p>
    </article>
  );
}
