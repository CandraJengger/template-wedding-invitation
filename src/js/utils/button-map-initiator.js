const ButtonMapInitiator = {
  init({ btnViewMap, linkMap, slug }) {
    btnViewMap.addEventListener('click', () => {
      this._linkTo(linkMap.length > 0 ? linkMap : `#${slug}`);
    });
  },

  _linkTo(link = '#') {
    window.location.href = link;
  },
};

export default ButtonMapInitiator;
