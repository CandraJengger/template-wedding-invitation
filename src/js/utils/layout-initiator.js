import { addClass, removeClass, isContains, replaceClass } from './class-utils';
import { playAudio, pauseAudio } from './audio-utils';

const icoPlay = '<i class="fas fa-play"></i>';
const icoPause = '<i class="fas fa-pause"></i>';

const LayoutInitiator = {
  init({ mainContent, fab, audio }) {
    fab.addEventListener('click', () => this._toggleFAB(fab, audio));

    if (window !== undefined) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
          if (isContains(fab, 'bg-white')) {
            replaceClass({
              element: fab,
              oldClass: 'bg-white',
              newClass: 'bg-yellow-200',
            });
            replaceClass({
              element: fab,
              oldClass: 'text-green-dark',
              newClass: 'text-white',
            });
          }
          return;
        }

        replaceClass({
          element: fab,
          oldClass: 'bg-yellow-200',
          newClass: 'bg-white',
        });
        replaceClass({
          element: fab,
          oldClass: 'text-white',
          newClass: 'text-green-dark',
        });
      });
    }
  },

  _toggleFAB(fab, audio) {
    if (isContains(fab, 'play')) {
      fab.innerHTML = icoPlay;
      removeClass(fab, 'play');
      pauseAudio(audio);
      return;
    }

    fab.innerHTML = icoPause;
    playAudio(audio);
    addClass(fab, 'play');
    return;
  },
};

export default LayoutInitiator;
