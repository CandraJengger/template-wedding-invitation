class CardProfileComp extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';
    this.imgSrc = this.getAttribute('imgSrc') || '';
    this.altImg = this.getAttribute('altImg') || '';
    this.nameProfile = this.getAttribute('nameProfile') || '';
    this.fullName = this.getAttribute('fullName') || '';
    this.fatherName = this.getAttribute('fatherName') || '';
    this.motherName = this.getAttribute('motherName') || '';
    this.linkIG = this.getAttribute('linkIG') || '#';
    this.usernameIG = this.getAttribute('usernameIG') || '';

    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card flex flex-col items-center" id="${this.idComp}">
      <div
        class="relative card-img w-60 h-60 rounded-full overflow-hidden"
      >
        <img
          data-src="${this.imgSrc}"
          alt="${this.altImg}"
          class="lazy absolute w-full h-full inset-0 object-cover object-center"
          width="240"
          height="240"
        />
      </div>
      <div class="card-body py-6 text-center">
        <h3
          class="inline-block text-green-dark text-4xl font-semibold pb-9 border-b border-black bad-script"
        >
          ${this.nameProfile}
        </h3>
        <h4
          class="text-2xl my-5 text-green-full-dark font-extrabold quicksand px-4"
        >
          ${this.fullName}
        </h4>
        <p class="mt-6 text-xl leading-relaxed text-green-dark quicksand">
          <span class="font-bold text-green-dark">Putri dari:</span>
          <br />
          ${this.fatherName} <br />
          & <br />
          ${this.motherName}
        </p>
      </div>
      <div class="card-footer">
        <a
          href="${this.linkIG}"
          class="relative inline-flex items-center w-12 group hover:w-24 h-12 cursor-pointer transition-all duration-300"
        >
          <button
            class="absolute left-0 w-12 h-12 bg-green-dark text-white text-lg rounded-full z-20"
          >
            <i class="fab fa-instagram text-2xl"></i>
          </button>
          <span
            class="absolute right-0 transition-all duration-200 opacity-0 group-hover:opacity-100 italic font-light"
            >${this.usernameIG}</span
          >
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define('card-profile', CardProfileComp);
