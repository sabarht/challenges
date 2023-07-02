import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  let [isFavorite, setIsFavorite] = useState(false);
  function handleFavButton() {
    setIsFavorite(!isFavorite);
  }
  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        handleFavButton();
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
