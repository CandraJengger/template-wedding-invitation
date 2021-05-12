const ButtonLiveYtInitiator = {
  init({ btnLiveStream, linkYoutube, slug }) {
    btnLiveStream.addEventListener('click', () => {
      this._linkTo(linkYoutube.length > 0 ? linkYoutube : `#${slug}`);
    });
  },

  _linkTo(link = '#') {
    window.location.href = link;
  },
};

export default ButtonLiveYtInitiator;
