import { replaceClass, addClass } from './class-utils';
import { playAudio } from './audio-utils';

const InviteInitiator = {
  init({ invContainer, buttonInvComp, main, audio }) {
    buttonInvComp.addEventListener('click', () => {
      addClass(invContainer, 'hidden');
      replaceClass({
        element: main,
        oldClass: 'hidden',
        newClass: 'block',
      });
      playAudio(audio);
    });
  },
};

export default InviteInitiator;
