import API_ENDPOINT from './api-endpoint';

const ActionSource = {
  async _fetchAPI(apiEndpoint) {
    const res = await fetch(apiEndpoint);
    const resJson = await res.json();
    return resJson;
  },

  async checkInvitation(name) {
    const result = await this._fetchAPI(API_ENDPOINT.CHECK_INVITATION(name));
    return result.data;
  },

  async getWishList() {
    const result = await this._fetchAPI(API_ENDPOINT.WISH_LIST);
    return result.data;
  },

  async updatePresence(data) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const endpoint = API_ENDPOINT.PERSON_PRESENCE(data.id);
    const result = await fetch(endpoint, options);
    const resultJson = await result.json();

    return resultJson;
  },
};

export default ActionSource;
