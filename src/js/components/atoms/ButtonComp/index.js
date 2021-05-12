class ButtomComp extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';
    this.text = this.getAttribute('text') || 'Button';
    this.variant = this.getAttribute('variant') || 'primary';
    this.type = this.getAttribute('type') || '';
    this.className = this.getAttribute('className') || '';

    this.render();
  }

  render() {
    this.innerHTML = `
      <button
        id=${this.idComp}
        class="${
          this.variant === 'primary'
            ? `inline-block btn py-3 px-8 text-center bg-green-700 hover:bg-green-dark text-white 700 transition-all duration-200 ${
                this.type === 'submit' ? '' : 'my-7'
              } font-semibold rounded-md cursor-pointer ${this.className}`
            : `inline-block bg-yellow-200 hover:bg-transparent text-black hover:text-yellow-200 py-3 px-8 border border-transparent hover:border-yellow-200 rounded-md font-semibold opacity-100 transition-all duration-200 my-6 cursor-pointer ${this.className}`
        }"
        type="${this.type === 'submit' ? 'submit' : ''}"
      >
        ${this.text}
      </button>
    `;
  }
}

customElements.define('button-comp', ButtomComp);
