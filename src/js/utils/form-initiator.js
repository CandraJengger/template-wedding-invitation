const FormInitiator = {
  init({ form, nameInput, wishInput, button, radios }) {
    this._form = form;
    this._nameInput = nameInput;
    this._wishInput = wishInput;
    this._button = button;

    this._form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
        name: this._nameInput.value,
        wish: this._wishInput.value,
        attend: this._getValueFromRadio(radios),
      };

      console.log(data);
    });
  },

  _getValueFromRadio(radios) {
    let value = '';

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        value = radios[i].value;
        break;
      }
    }

    return value;
  },
};

export default FormInitiator;
