import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const getApiKey = async() => {
  const response = await axios.post(BASE_URL);
  return response.data;
}

export default getApiKey;