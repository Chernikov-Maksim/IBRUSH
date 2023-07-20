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
    768: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
