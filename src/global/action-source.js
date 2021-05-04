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

  async updatePresence(name, data) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      query: {
        name,
      },
      body: JSON.stringify(data),
    };

    const result = await fetch(API_ENDPOINT.PERSON_PRESENCE, options);
    return result;
  },
};

export default ActionSource;
