class CountdownComp extends HTMLElement {
  connectedCallback() {
    this.idComp = this.getAttribute('idComp') || '';
    this.days = this.getAttribute('days') || '00';
    this.hours = this.getAttribute('hours') || '00';
    this.minutes = this.getAttribute('minutes') || '00';
    this.seconds = this.getAttribute('seconds') || '00';
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="${this.idComp}" class="flex justify-center mt-10">
        <div class="flex flex-col mx-2 md:mx-6">
          <span class="text-3xl md:text-5xl">${this.days}</span>
          <span class="text-yellow-200 text-sm">Hari</span>
        </div>
        <div class="flex flex-col mx-2 md:mx-6">
          <span class="text-3xl md:text-5xl">${this.hours}</span>
          <span class="text-yellow-200 text-sm">Jam</span>
        </div>
        <div class="flex flex-col mx-2 md:mx-6">
          <span class="text-3xl md:text-5xl">${this.minutes}</span>
          <span class="text-yellow-200 text-sm">Menit</span>
        </div>
        <div class="flex flex-col mx-2 md:mx-6">
          <span class="text-3xl md:text-5xl">${this.seconds}</span>
          <span class="text-yellow-200 text-sm">Detik</span>
        </div>
      </div>
    `;
  }
}

customElements.define('countdown-comp', CountdownComp);
