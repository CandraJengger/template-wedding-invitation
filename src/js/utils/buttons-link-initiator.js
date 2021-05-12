const ButtonsInitiator = {
  init({ btnViewMap, btnLiveStream, linkMap, linkYoutube, slug }) {
    btnViewMap.addEventListener('click', () => {
      this._linkTo(linkMap.length > 0 ? linkMap : `#${slug}`);
    });

    btnLiveStream.addEventListener('click', () => {
      this._linkTo(linkYoutube.length > 0 ? linkYoutube : `#${slug}`);
    });
  },

  _linkTo(link = '#') {
    window.location.href = link;
  },
};

export default ButtonsInitiator;
