import '../css/app.css';
// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';

import './button';

const wishes = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 499px
    473: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is >= 999px
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
