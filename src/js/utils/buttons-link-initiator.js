const ButtonsInitiator = {
  init({ btnViewMap, btnLiveStream, linkMap, linkYoutube }) {
    btnViewMap.addEventListener('click', () => {
      this._linkTo(linkMap.length > 0 ? linkMap : '#');
    });

    btnLiveStream.addEventListener('click', () => {
      this._linkTo(
        linkYoutube.length > 0 ? linkYoutube : 'https://www.youtube.com/'
      );
    });
  },

  _linkTo(link = '#') {
    window.location.href = link;
  },
};

export default ButtonsInitiator;
