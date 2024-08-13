const parallax1 = document.querySelector("#parallax-1");
const parallax2 = document.querySelector("#parallax2");
const parallax3 = document.querySelector("#parallax3");
const parallax4 = document.querySelector("#parallax4");
const parallax5 = document.querySelector("#parallax5");
const parallax6 = document.querySelector("#parallax6");
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  parallax3.style.left = scroll * 1 + "px";
  parallax6.style.left = scroll * 0.5 + "px";

  parallax5.style.bottom = scroll * -2 + "px";
  parallax5.style.right = scroll * 2 + "px";

  parallax4.style.right = scroll * 2 + "px";
  parallax2.right = scroll + "px";
  parallax1.style.right = scroll * 2 + "px";
  titulo.style.right = scroll * 4 + "px";
});
