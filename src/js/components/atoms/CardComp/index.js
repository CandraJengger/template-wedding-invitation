class CardComp extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || '';
    this.content = this.getAttribute('content') || '';
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
        class="p-5 rounded-md shadow-lg bg-white mx-auto my-6"
      >
        <h4 class="font-semibold text-green-full-dark">${this.title}</h4>
        <p class="text-sm text-gray-600">
         ${this.content}
        </p>
      </div>
    `;
  }
}

customElements.define('card-comp', CardComp);
