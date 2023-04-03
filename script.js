const h1Element = document.querySelector("#intro #h1");

window.addEventListener("load", function () {
  h1Element.style.animation = "entrance 0.8s ease-in-out forwards";
});


function scrollToSection(id) {
  let target = document.getElementById(id);
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}