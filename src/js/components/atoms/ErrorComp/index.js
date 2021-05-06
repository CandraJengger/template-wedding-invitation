class ErrorComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-wrapper">
        <div class="error-wrapper-content">
          <h1 class="text-2xl">Something went wrong...</h1>
          <button class="inline-block bg-green-dark hover:bg-transparent text-black hover:text-green-dabg-green-dark py-3 px-8 border border-transparent hover:border-green-dark rounded-md font-semibold opacity-100 transition-all duration-200 my-4 cursor-pointer">Try Again</button>
        </div>
      </div>
    `;
  }
}

customElements.define('error-comp', ErrorComp);
