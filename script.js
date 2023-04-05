"use strict";

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const currentImage = document.querySelector(".carousel-image img");
const controls = document.querySelectorAll(".control button");

let currentImageNumber = 2;
changeControlColor(currentImageNumber);

leftArrow.addEventListener("click", () => {
  currentImageNumber--;
  if (currentImageNumber < 1) {
    currentImageNumber = 1;
  }
  changeControlColor(currentImageNumber);
  changeImage(currentImageNumber);
});

rightArrow.addEventListener("click", () => {
  currentImageNumber++;
  if (currentImageNumber > 3) {
    currentImageNumber = 3;
  }
  changeControlColor(currentImageNumber);
  changeImage(currentImageNumber);
});

controls.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeControlColor(index + 1);
    changeImage(index + 1);
  });
});
function changeControlColor(number) {
  const button = controls[number - 1];
  button.classList.add("active");
  controls.forEach((btn) => {
    if (btn !== button) btn.classList.remove("active");
  });
}

function changeImage(number) {
  currentImage.src = `./img/${number}.jpg`;
}

let counter = 2;
setInterval(() => {
  changeImage(counter);
  changeControlColor(counter);
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 2000);
