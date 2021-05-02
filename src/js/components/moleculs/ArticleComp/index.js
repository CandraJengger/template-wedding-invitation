class ArticleComp extends HTMLElement {
  connectedCallback() {
    this.imgSrc = this.getAttribute('imgSrc') || '';
    this.altImg = this.getAttribute('altImg') || '';
    this.title = this.getAttribute('title') || '';
    this.years = this.getAttribute('years') || '';
    this.content = this.getAttribute('content') || '';
    this.isReverse = this.getAttribute('isReverse') || 'true';

    this.render();
  }

  render() {
    this.innerHTML = `
    <article
      class="story my-8 container flex flex-col-reverse md:flex-row${
        this.isReverse === 'true' ? '-reverse' : ''
      }"
      data-aos="zoom-in"
    >
      <div
        class="process-text w-full md:w-2/4 px-8 flex flex-col justify-center"
      >
        <h2 class="text-2xl font-semibold">${this.title}</h2>
        <text-comp
          content="${this.years}"
          className="inline-block text-xl text-gray-600 italic tracking-tighter mb-5"
        ></text-comp>
        <text-comp
          content="${this.content}"
        >
        </text-comp>
      </div>
      <div
        class="process-img-wrapper relative w-full md:w-2/4 h-64 sm:h-72 lg:h-96 bg-pink-200 mb-5"
      >
        <img
          src="${this.imgSrc}"
          alt="${this.altImg}"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </article>
    `;
  }
}

customElements.define('article-comp', ArticleComp);
