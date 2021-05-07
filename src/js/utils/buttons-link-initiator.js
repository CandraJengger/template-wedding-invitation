const ButtonsInitiator = {
  init({ btnViewMap, btnLiveStream }) {
    btnViewMap.addEventListener('click', () => {
      this._linkTo(
        "https://www.google.com/maps/place/3%C2%B042'17.4%22N+98%C2%B040'48.9%22E/@3.7048352,98.6780557,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d3.7048352!4d98.6802444?hl=en"
      );
    });

    btnLiveStream.addEventListener('click', () => {
      this._linkTo('https://www.youtube.com/');
    });
  },

  _linkTo(link = '#') {
    window.location.href = link;
  },
};

export default ButtonsInitiator;
