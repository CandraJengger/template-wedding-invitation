class InviteComp extends HTMLElement {
  set namePerson(name) {
    this._namePerson = name;
    this.render();
  }

  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';

    this.render();
  }

  render() {
    this.innerHTML = `
    <div
      id="${this.idComp}"
      class="fixed inset-0 bg-white z-50 flex justify-center items-center p-10"
    >
      <img
        src="../images/content/eastwood-14.png"
        alt="Decoration"
        class="absolute h-72 lg:h-96 -left-7 -bottom-40 md:left-0 md:-bottom-6"
      />
      <img
        src="../images/content/eastwood-14.png"
        alt="Decoration"
        class="absolute h-72 lg:h-96 -top-40 -right-7 md:right-0 md:-top-6 transform rotate-180"
      />
      <div class="text-center z-30 transform translate-y-0 md:translate-y-10">
        <h1
          class="bad-script text-5xl md:text-8xl text-green-700 font-semibold my-10"
        >
          Dimas & Kiki
        </h1>
        <p class="text-xl md:text-2xl text-green-dark mb-6">
          WEDDING EVENT <br />INVITATION
        </p>
        <p class="text-green-full-dark font-semibold">DEAR:</p>
        <p class="text-green-full-dark font-semibold text-lg" id="">
          ${this._namePerson ? this._namePerson : ''}
        </p>
        <button-comp
          idComp="btn-open-invitation"
          text="Buka Undangan"
        ></button-comp>
      </div>
    </div>
    `;
  }
}

customElements.define('invite-comp', InviteComp);
