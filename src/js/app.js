import '../css/app.css';
// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import 'aos/dist/aos.css';

import AOS from 'aos';

import './components';

import LayoutInitiator from './utils/layout-initiator';
import ButtonsInitiator from './utils/buttons-link-initiator';
import CountdownInitiator from './utils/countdown-initiator';
import FormInitiator from './utils/form-initiator';
import { getNameFromURL } from './routes/url-parser';

LayoutInitiator.init({
  mainContent: document.querySelector('main'),
  fab: document.getElementById('button-music'),
  audio: document.querySelector('#backsound'),
});

ButtonsInitiator.init({
  btnLiveStream: document.getElementById('btn-live-stream'),
  btnViewMap: document.getElementById('btn-view-map'),
});

CountdownInitiator.init({
  countdownContainer: document.getElementById('countdown'),
  date: new Date('May 22, 2021 08:00:00').getTime(),
});

// AOS
AOS.init();

window.addEventListener('load', AOS.refresh);

// Get Name From URL
const nameFromURL = getNameFromURL();
if (nameFromURL.length > 0) {
  document.getElementById(
    'formContainer'
  ).innerHTML = `<form-comp idComp="form" nameValue="${nameFromURL}" class="w-full md:w-2/4 my-5 px-4"></form-comp>`;

  FormInitiator.init({
    form: document.getElementById('form'),
    nameInput: document.getElementById('nameInput'),
    wishInput: document.getElementById('wishInput'),
    button: document.getElementById('btn-kehadiran'),
    radios: document.getElementsByName('kehadiran'),
  });
}

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
    lightGallery(document.getElementById('lightgallery'));
  })
  .catch((error) => {
    console.log(error);
    console.error(
      'An error occurred while loading the lightgallery module',
      'Module Load Failed'
    );
  });
