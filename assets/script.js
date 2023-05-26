$(".oth").on("click", function () {
  $(".m-oth").toggle('d-none');
});
$(".profile").on("click", function () {
  $(".m-profile").toggle('d-none');
});
$(document).ready(function () {
  new Swiper('.swiper', {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 5,
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
          1920: {
              slidesPerView: 5,
              spaceBetween: 30
          },
          1028: {
              slidesPerView: 4,
              spaceBetween: 30
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 10
          }
      }
  });
});