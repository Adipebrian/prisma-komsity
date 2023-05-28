$(".oth").on("click", function () {
  $(".m-oth").toggle("d-none");
});
$(".profile").on("click", function () {
  $(".m-profile").toggle("d-none");
});
$(".profile2").on("click", function () {
  $(".m-profile2").toggle("d-none");
});

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
