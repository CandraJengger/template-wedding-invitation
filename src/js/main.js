import LayoutInitiator from './utils/layout-initiator';

class Main {
  constructor({ mainContent, fab, audio }) {
    this._mainContent = mainContent;
    this._fab = fab;
    this._audio = audio;

    this._initialAppShell();
  }

  _initialAppShell() {
    LayoutInitiator.init({
      mainContent: this._mainContent,
      fab: this._fab,
      audio: this._audio,
    });
  }
}

export default Main;
