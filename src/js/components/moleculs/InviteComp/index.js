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
      
      <picture>
        <source media="(max-width: 500px)" srcset="../images/content/bg-landing-2.webp">
        <source media="(min-width: 600px)" srcset="../images/content/bg-landing.webp">
        <img src="../images/content/bg-landing.webp" alt="Background landing" class="absolute inset-0 w-full h-full object-cover object-center">
      </picture>

      <div class="text-center z-30 transform translate-y-6 md:translate-y-10">
        <h1
          class="bad-script text-6xl md:text-8xl text-green-700 my-6"
        >
          Kiki & Dimas
        </h1>
        <p class="text-xl md:text-2xl text-green-dark mb-6">
          WEDDING EVENT <br />INVITATION
        </p>
        <p class="text-green-full-dark font-semibold opacity-60">Kepada:</p>
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
