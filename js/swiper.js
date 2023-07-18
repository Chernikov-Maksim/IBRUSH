var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
