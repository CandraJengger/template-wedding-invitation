import { addClass, removeClass, isContains } from './class-utils';
import { playAudio, pauseAudio } from './audio-utils';

const icoPlay = '<i class="fas fa-play"></i>';
const icoPause = '<i class="fas fa-pause"></i>';

const LayoutInitiator = {
  init({ mainContent, fab, audio }) {
    fab.addEventListener('click', () => this._toggleFAB(fab, audio));
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
