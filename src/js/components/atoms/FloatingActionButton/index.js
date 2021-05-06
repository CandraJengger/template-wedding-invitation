class FloatingActionButton extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';

    this.render();
  }

  render() {
    this.innerHTML = `
      <button
        class="fixed right-5 bottom-5 md:bottom-14 w-16 h-16 shadow-xl text-xl rounded-full bg-white text-green-dark z-50 transition-all duration-150 play"
        id="${this.idComp}"
      >
        <i class="fas fa-pause"></i>
      </button>
    `;
  }
}

customElements.define('fab-comp', FloatingActionButton);
