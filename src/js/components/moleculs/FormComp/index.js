class FormComp extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';
    this.nameValue = this.getAttribute('nameValue') || '';
    this.render();
  }

  render() {
    this.innerHTML = `
      <form id="${this.idComp}">
        <!-- Input Nama -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium">Nama</span>
          <input type="text" class="input-text" placeholder="" id="nameInput" value="${this.nameValue}" disabled/>
        </label>
        <!-- Input Doa & Harapan -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium">Doa & Harapan</span>
          <textarea class="input-text" rows="8" id="wishInput"></textarea>
        </label>

        <!-- Input Kehadiran -->
        <label class="block mb-4">
          <span class="text-gray-700 font-medium block mb-2"
            >Maukah kamu hadir ?</span
          >
          <input type="radio" name="kehadiran" id="hadir" value="hadir" />
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
            value="tidak hadir"
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
          className="w-full"
        >
        </button-comp>
      </form>
    `;
  }
}

customElements.define('form-comp', FormComp);
