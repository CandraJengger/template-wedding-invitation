import CONFIG from './config';

const API_ENDPOINT = {
  // GET
  CHECK_INVITATION: (name) => `${CONFIG.BASE_URL}public_name/${name}`,

  // PUT
  PERSON_PRESENCE: (id) => `${CONFIG.BASE_URL}public/${id}`,
};

export default API_ENDPOINT;
