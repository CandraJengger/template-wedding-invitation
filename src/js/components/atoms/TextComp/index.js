class TextComp extends HTMLElement {
  connectedCallback () {
    this.content = this.getAttribute('content') || ''
    this.className = this.getAttribute('className') || ''
    this.render()
  }

  render() {
    this.innerHTML = `<p class="${this.className}">${this.content}</p>`
  }

}

customElements.define('text-comp', TextComp)