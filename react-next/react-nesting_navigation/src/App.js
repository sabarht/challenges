import "./styles.css";
import Header from "./components/Header.js";
import avatar from "./img/avatar.jpg";
import Navigation from "./components/Navigation.js";
import logo from "./img/logo.jpg";
import { Children } from "react";

export default function App({ Children }) {
  return (
    <>
      <Header>
        <Navigation>
          <Logo />
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            impressum
          </Link>
        </Navigation>
        <avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
