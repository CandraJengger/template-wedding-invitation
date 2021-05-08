import CONFIG from './config';

const API_ENDPOINT = {
  // GET
  CHECK_INVITATION: (name) => `${CONFIG.BASE_URL}public_name/${name}`,
  // PUT
  PERSON_PRESENCE: (id) => `${CONFIG.BASE_URL}public/${id}`,
  // GET wish
  WISH_LIST: `${CONFIG.BASE_URL}public`,
  // Get Link
  LINK_YOUTUBE: `${CONFIG.BASE_URL}public_url`,
};

export default API_ENDPOINT;
