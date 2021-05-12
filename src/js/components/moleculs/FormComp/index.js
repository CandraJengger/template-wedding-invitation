class FormComp extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';
    this.nameValue = this.getAttribute('nameValue') || '';
    this.idValue = this.getAttribute('idValue') || '';
    this.wishValue = this.getAttribute('wishValue') || '';
    this.render();
  }

  render() {
    this.innerHTML = `
      <form id="${this.idComp}">
        <!-- ID -->
        <input type="text" id="idInput" value="${this.idValue}" class="hidden"/>
        <!-- Input Nama -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium">Nama</span>
          <input type="text" class="input-text" placeholder="" id="nameInput" value="${
            this.nameValue
          }" disabled/>
        </label>
        <!-- Input Doa & Harapan -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium">Doa & Harapan</span>
          <textarea class="input-text" rows="8" id="wishInput" placeholder="Tuliskan doa serta harapanmu untuk Kiki & Dimas..." required>${
            this.wishValue
          }</textarea>
        </label>

        <!-- Input Kehadiran -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium block mb-2"
            >Maukah kamu hadir ?</span
          >
          <input type="radio" name="kehadiran" id="hadir" value="hadir" ${
            this.radioChecked === 'hadir' && 'checked'
          } class="mb-4"/>
          <label
            for="hadir"
            class="mr-4 cursor-pointer text-green-full-dark"
            >Ya, saya akan hadir</label
          >
          <br />
          <input
            type="radio"
            name="kehadiran"
            id="tidakHadir"
            value="tidak hadir" class="mb-4"
          />
          <label
            for="tidakHadir"
            class="mr-4 cursor-pointer text-green-full-dark"
            >Maaf, belum bisa hadir</label
          >
        </label>
        <button-comp
          idComp="btn-kehadiran"
          type="submit"
          text="Kirim"
          className="w-full my-0"
        >
        </button-comp>
        <div class="respon h-56 flex justify-center items-center text-green-700 text-4xl text-center ">
          <p id="response" class="bad-script w-44 opacity-0 transition-all duration-200">Terimakasih telah memberikan respon ^_^</p>
        </div>
      </form>
    `;
  }
}

customElements.define('form-comp', FormComp);
