import ActionSource from '../../global/action-source';

const FormInitiator = {
  init({ form, nameInput, wishInput, idInput, button, radios }) {
    this._form = form;
    this._nameInput = nameInput;
    this._wishInput = wishInput;
    this._idValue = idInput;
    this._button = button;

    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        id: this._idValue.value,
        name: this._nameInput.value,
        wish: this._wishInput.value,
        attending: this._getValueFromRadio(radios),
      };

      const result = await ActionSource.updatePresence(data);

      console.log(result);
      if (result) {
        this._form.innerHTML += '<p>Terimakasih sudah mengirimkan respon</p>';
      }
    });
  },

  _getValueFromRadio(radios) {
    let value = '';

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        value = radios[i].value === 'hadir' ? true : false;
        break;
      }
    }

    return value;
  },
};

export default FormInitiator;
