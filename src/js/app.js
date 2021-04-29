import '../css/app.css';
// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'lightgallery.js/dist/css/lightgallery.css';

import './components';

import Main from './main';

const main = new Main({
  mainContent: document.querySelector('main'),
  fab: document.getElementById('button-music'),
  audio: document.querySelector('#backsound'),
});

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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

Promise.all([
  import(
    /* webpackChunkName: "lightgallery" */
    'lightgallery.js'
  ), // lightgallery.js must be first
  import('lg-fullscreen.js'),
  import('lg-zoom.js'),
  import('lg-pager.js'),
  // import('lg-hash.js')
])
  .then(([]) => {
    console.log('kenek');
    lightGallery(document.getElementById('lightgallery'));
  })
  .catch((error) => {
    console.log(error);
    toastr.error(
      'An error occurred while loading the lightgallery module',
      'Module Load Failed'
    );
  });
