// swiper slide slide-bar
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
// swiper slide sale-slide
var swiper = new Swiper(".sala_sec", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints:{
    1600:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 4,
    },
    1000:{
      slidesPerView: 3,
    },
    800:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    400:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    200:{
      slidesPerView: 1,
    },
  }
});
// swiper slide sale-slide2
var swiper = new Swiper(".product_swip", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints:{
    1600:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 4,
    },
    1000:{
      slidesPerView: 3,
    },
    800:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    400:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    200:{
      slidesPerView: 1,
    },
  }
});
