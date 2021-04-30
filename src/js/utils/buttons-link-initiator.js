const ButtonsInitiator = {
  init({ btnViewMap, btnLiveStream }) {
    btnViewMap.addEventListener('click', () => {
      this._linkTo(
        'https://www.google.co.id/maps/place/Widya+Wicara+(PT.+Widya+Informasi+Nusantara)/@-7.7528293,110.3975666,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a592ac896ebb5:0xaa73f66867c276df!8m2!3d-7.7528392!4d110.3997873'
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
