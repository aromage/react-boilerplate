import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type RequestConfig = {
  suppressStatusCode?: number[];
} & AxiosRequestConfig;

function createAxios(requestConfig: RequestConfig): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: requestConfig.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: false, // 백엔드 서버 설정 후 주석 해제(cors 쿠키 허용을 위해 필요)
  });

  axiosInstance.interceptors.request.use(
    async (config: any) => {
      config.headers = config.headers || {};

      config.headers = {
        ...config.headers,
        Authorization: '',
      };

      return config;
    },
    (error) => {
      console.log('error');
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log('API call successful:', response.config.url);
      console.log(response.status);

      return response;
    },

    async (error) => {
      console.log(error.response.status);
      console.error('API call failed:', error.response.config?.url);
      const {
        config,
        response: { status },
      } = error;
      //   const originalConfig = config;

      console.log('error status : ', status);

      return Promise.reject(error.response.data || error);
    },
  );

  return axiosInstance;
}

function camelCase(str) {
  return str
    .replace('/codes/', '')
    .replace(/\b[/-]([a-z])/g, (_, char) => char.toUpperCase());
}

const axiosClient = createAxios({
  baseURL: '',
});

export const axiosGeneralAPI = () => {
  return axiosClient;
};
