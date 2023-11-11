// import axios from "axios";

// const baseURL = import.meta.env.VITE_API_URL ?? "/";


// axios.defaults.baseURL = baseURL;
// // set base url for axios
// const instance = axios.create({
//   baseURL,
// });

// export default instance;


import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? '/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      // If the request is unauthorized and has not been retried yet
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          '/refresh',  // Your refresh token endpoint
          {
            refresh_token: localStorage.getItem('refreshToken'),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (refreshResponse.status === 200) {
          // Update the access token and retry the original request
          localStorage.setItem('token', refreshResponse.data.access_token);
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access_token}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // Handle refresh error (e.g., redirect to login)
        console.error('Failed to refresh token:', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
