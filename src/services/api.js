import axios from 'axios';

const api = axios.create({
    baseURL: 'https://test-api-5d354-default-rtdb.firebaseio.com'
});

export default api;