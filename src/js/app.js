import '../css/app.css';
// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import LazyLoad from 'vanilla-lazyload';

import './components';

import LayoutInitiator from './utils/layout-initiator';
import ButtonsInitiator from './utils/buttons-link-initiator';
import CountdownInitiator from './utils/countdown-initiator';
import FormInitiator from './utils/form-initiator';
import InviteInitiator from './utils/invite-initiator';

import { getNameFromURL, getSlugFromURL } from './routes/url-parser';
import ActionSource from '../global/action-source';

// Get Name From URL
const App = async () => {
  const nameSlugFromURL = getSlugFromURL();
  const nameFromURL = getNameFromURL();

  if (nameFromURL.length > 0) {
    const result = await ActionSource.checkInvitation(nameSlugFromURL);
    const invContainer = document.querySelector('invite-comp');
    invContainer.namePerson = result.data.name;

    if (!result) {
      document.getElementById('body').innerHTML =
        '<no-invite-comp></no-invite-comp>';
      return;
    }

    InviteInitiator.init({
      invContainer: invContainer,
      buttonInvComp: document.getElementById('btn-buka-undangan'),
      main: document.getElementById('main'),
      audio: document.querySelector('#backsound'),
    });

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
  } else {
    document.getElementById('body').innerHTML =
      '<no-invite-comp></no-invite-comp>';
    return;
  }

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

  const pageLazyLoad = new LazyLoad();

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
};

App();
