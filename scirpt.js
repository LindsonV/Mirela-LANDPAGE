/* _______CARROSSEL pg02_________ */

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let indexCards = 0;

function carrossel() {
  indexCards++;

  if (indexCards > img.length - 1) {
    indexCards = 0;
  }

  imgs.style.transform = `translateX(${-indexCards * 500}px)`;
}
setInterval(carrossel, 1800);

