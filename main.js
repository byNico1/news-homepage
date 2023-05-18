const hamburger = document.getElementsByClassName("hamburger")[0];
const closeBtn = document.getElementsByClassName("close-icon")[0];
const nav = document.getElementsByClassName("nav-items__container")[0];

hamburger.onclick = function () {
  nav.classList.add("block");
};
closeBtn.onclick = function () {
  nav.classList.remove("block");
};
