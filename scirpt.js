/* _______CARROSSEL_________ */

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let index = 0;

function carrossel() {
  index++;

  if (index > img.length - 1) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(carrossel, 1800);

