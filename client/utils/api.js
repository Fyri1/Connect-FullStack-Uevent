import axios from 'axios';

// Проверим в самом начале, есть ли токен в хранилище
const JWTToken = localStorage.getItem('token');
const BASE_URL = 'http://localhost:8080';
// Создать инстанс axios
const $api = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});
function apiSetHeader(name, value) {
  if (value) {
    $api.defaults.headers[name] = value;
  }
}

// Если токен есть, то добавим заголовок к запросам
if (JWTToken) {
  apiSetHeader('Authorization', `Bearer ${JWTToken}`);
}

$api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get(`${BASE_URL}/api/auth/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        console.log(response);
        // return $api.request(originalRequest, {
        //   "Authorization": 'Bearer ' + response.data.accessToken,
        // });
      } catch (err) {
        // location.href = '/';
        console.log(err);
      }
    }
    throw error;
  }
);

export default $api;

export { apiSetHeader };
