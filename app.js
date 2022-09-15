const burgerBtn = document.getElementById("burgerBtn");
let burgerMenu = document.querySelector("#burgerMenu");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("nav-bar__list-burger");
  burgerBtn.classList.toggle("burger--active");
});
