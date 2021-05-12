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
import PreloaderIntitiator from './utils/preloader-inititator';

import { getNameFromURL, getSlugFromURL } from './routes/url-parser';
import ActionSource from '../global/action-source';

// Get Name From URL
const App = async () => {
  const nameSlugFromURL = getSlugFromURL();
  const nameFromURL = getNameFromURL();

  try {
    if (nameFromURL.length > 0) {
      PreloaderIntitiator.showLoading(
        document.querySelector('spinner-comp .spinner-wrapper')
      );

      const dataPerson = await ActionSource.checkInvitation(nameSlugFromURL);
      const invContainer = document.querySelector('invite-comp');

      if (dataPerson === undefined) {
        document.getElementById('body').innerHTML =
          '<no-invite-comp></no-invite-comp>';
        return;
      }

      invContainer.namePerson = dataPerson.data.name;

      InviteInitiator.init({
        invContainer: invContainer,
        buttonInvComp: document.getElementById('btn-open-invitation'),
        main: document.getElementById('main'),
        audio: document.querySelector('#backsound'),
      });

      document.getElementById('formContainer').innerHTML = `
        <form-comp 
          idComp="form" 
          nameValue="${dataPerson.data.name}" 
          idValue="${dataPerson.data.id_invitation}" 
          wishValue="${dataPerson.data.wish}" 
          class="w-full md:w-2/4 my-5 px-4">
        </form-comp>
      `;

      FormInitiator.init({
        form: document.getElementById('form'),
        nameInput: document.getElementById('nameInput'),
        wishInput: document.getElementById('wishInput'),
        idInput: document.getElementById('idInput'),
        button: document.getElementById('btn-kehadiran'),
        radios: document.getElementsByName('kehadiran'),
        response: document.getElementById('response'),
      });
    } else {
      document.getElementById('body').innerHTML =
        '<no-invite-comp></no-invite-comp>';
      return;
    }

    // Wish List
    const wishList = await ActionSource.getWishList();
    if (wishList) {
      document.querySelector('.swiper-wrapper').innerHTML = `
    ${wishList.wishes.map(
      (wish) => `
      <div class="swiper-slide flex items-center justify-center">
        <card-comp
          title="${wish.name}"
          content="${wish.wish}"
          class="w-2/3 md:w-full"
        >
        </card-comp>
      </div>
      `
    )}
    `;
    }

    // link youtube
    const linkYoutube = await ActionSource.getLinkYoutube();
    if (linkYoutube) {
      ButtonsInitiator.init({
        btnLiveStream: document.getElementById('btn-live-stream'),
        btnViewMap: document.getElementById('btn-view-map'),
        linkMap:
          "https://www.google.com/maps/place/3%C2%B042'17.4%22N+98%C2%B040'48.9%22E/@3.7048352,98.6780557,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d3.7048352!4d98.6802444?hl=en",
        linkYoutube: linkYoutube.url,
        slug: nameSlugFromURL,
      });
    }
    LayoutInitiator.init({
      mainContent: document.querySelector('main'),
      fab: document.getElementById('button-music'),
      audio: document.querySelector('#backsound'),
    });

    CountdownInitiator.init({
      countdownContainer: document.getElementById('countdown'),
      date: new Date('May 22, 2021 08:00:00').getTime(),
    });
  } catch (err) {
    console.log(err);
    PreloaderIntitiator.showError({
      errorMsg: 'Ups.. Something went wrong',
      errorWrapper: document.querySelector('error-comp .error-wrapper'),
    });
  } finally {
    PreloaderIntitiator.hideLoading(
      document.querySelector('spinner-comp .spinner-wrapper')
    );
  }

  AOS.init();
  document
    .getElementById('btn-open-invitation')
    .addEventListener('click', () => {
      AOS.refresh();

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
          document.querySelectorAll('.img-gallery-thumb').forEach((el) => {
            el.classList.add('pointer-events-none');
            el.classList.add('cursor-default');
          });
        });
    });
};

App();
