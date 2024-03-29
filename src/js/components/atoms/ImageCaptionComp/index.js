class ImageCaptionComp extends HTMLElement {
  connectedCallback() {
    this.imgSrc = this.getAttribute('imgSrc') || '';
    this.caption = this.getAttribute('caption') || '';
    this.render();
  }

  render() {
    this.innerHTML = `
      <figure
        class="mx-10 mt-10 mb-10 md:mb-0 flex flex-col justify-center items-center text-white"
      >
        <img
          data-src="${this.imgSrc}"
          alt="${this.caption}"
          class="lazy w-24 mb-4"
          width="96"
          height="96"
        />
        <figcaption class="text-lg font-semibold">${this.caption}</figcaption>
      </figure>
    `;
  }
}

customElements.define('image-caption', ImageCaptionComp);
