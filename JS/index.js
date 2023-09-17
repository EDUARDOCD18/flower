const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");

});

// determino el tamano de la pantalla
var w = window.innerWidth;
var h = window.innerHeight;

// pinto 250 estrellas random
for (i = 0; i < 250; i++) {
  wRan = Math.floor(Math.random() * w);
  hRan = Math.floor(Math.random() * h);
  var star = document.createElement("div");
  star.setAttribute("class", "star");
  star.style.bottom = hRan + "px";
  star.style.right = wRan + "px";
  document.body.appendChild(star);
}
