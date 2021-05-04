import CONFIG from './config';

const API_ENDPOINT = {
  // GET
  CHECK_INVITATION: (name) => `${CONFIG.BASE_URL}?name=${name}`,

  // PUT
  PERSON_PRESENCE: (name) => `${CONFIG.BASE_URL}/${name}`,
};

export default API_ENDPOINT;
