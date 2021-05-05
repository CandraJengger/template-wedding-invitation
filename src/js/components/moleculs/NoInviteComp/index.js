class NoInviteComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
        class="fixed inset-0 bg-white z-50 flex justify-center items-center p-10"
      >
        <img
          src="../images/content/eastwood-14.png"
          alt="Decoration"
          class="absolute h-72 lg:h-96 -left-7 -bottom-40 md:left-0 md:-bottom-6"
        />
        <div class="text-center z-30 transform translate-y-0 md:translate-y-10">
          <p class="text-xl md:text-2xl text-green-dark mb-6">
            Mohon maaf anda tidak terdaftar <br />
            dalam tamu undangan...
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('no-invite-comp', NoInviteComp);
