console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i < 6; i++) {
    const newStar = document.createElement("img");
    if (i <= filledStars) {
      newStar.src = "assets/star-filled.svg";
    } else {
      newStar.src = "assets/star-empty.svg";
    }

    new
  }
  //--^-- your code here --^--
}

renderStars(filledStars);
