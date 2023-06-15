import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import {
  AuthError,
  BadRequestError,
  LoginError,
  NotFoundError,
  OtpError,
  ServerError,
} from "./error";

type RequestConfig = {
  suppressStatusCode?: number[];
} & AxiosRequestConfig;

const isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: unknown, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  failedQueue = [];
};

function createAxios(requestConfig: RequestConfig): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: requestConfig.baseURL,

    headers: requestConfig.headers
      ? requestConfig.headers
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
    withCredentials: false, // 백엔드 서버 설정 후 주석 해제(cors 쿠키 허용을 위해 필요)
  });

  axiosInstance.interceptors.request.use(
    async (config: any) => {
      config.headers = config.headers || {};

      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        };
      }

      return config;
    },
    (error) => {
      console.log("error");
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log("API call successful:", response.config.url);

      return response;
    },

    async (error) => {
      console.log(error.response.status);
      console.error("API call failed:", error.response.config?.url);
      const {
        config,
        response: { status },
      } = error;
      const originalConfig = config;

      if (status === 404) {
        // throw new BadRequestError({})
      }

      if (status === 500) {
        console.log(error.response.data.code);
        switch (error.response.data.code) {
          default:
            break;
        }
      }

      return Promise.reject(error.response || error);
    }
  );

  return axiosInstance;
}

function camelCase(str: string) {
  return str
    .replace("/codes/", "")
    .replace(/\b[/-]([a-z])/g, (_, char) => char.toUpperCase());
}

const axiosClient = createAxios({
  baseURL: import.meta.env.VITE_APP_API_URL,
  // baseURL: 'http://218.145.184.144:8080/api/v1',
});

export const axiosSetHeader = (
  accessToken: string,
  userAgent?: string,
  cookie?: string
) => {
  axiosClient.defaults.headers.common = {
    ...axiosClient.defaults.headers.common,
    Authorization: `Bearer ${accessToken}`,
    "User-Agent": userAgent,
    Cookie: cookie,
  };
};

export const axiosGeneralAPI = () => {
  // axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_GENERAL_API_URL

  return axiosClient;
};
