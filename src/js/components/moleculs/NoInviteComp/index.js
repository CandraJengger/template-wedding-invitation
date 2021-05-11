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
          src="../images/content/leaf.webp"
          alt="Decoration"
          class="absolute -left-7 -bottom-14"
        />
        <img
          src="../images/content/leaf.webp"
          alt="Decoration"
          class="hidden sm:block absolute -right-7 -bottom-14"
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
