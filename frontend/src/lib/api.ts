import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL } from '../../config';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
  error?: string;
}     

export interface ApiError {
  error: string;
  status?: number;
}

// axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type':'application/json',
  },
});


/** API 메서드 */
export const api = {
  // GET 요청
  get: <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
    return apiClient.get(url, { params }).then((res) => res.data);
  },

  // POST 요청
  post: <T>(url: string, data?: Record<string, unknown>): Promise<T> => {
    return apiClient.post(url, data).then((res) => res.data);
  },

  // PUT 요청
  put: <T>(url: string, data?: Record<string, unknown>): Promise<T> => {
    return apiClient.put(url, data).then((res) => res.data);
  },

  // DELETE 요청
  delete: <T>(url: string): Promise<T> => {
    return apiClient.delete(url).then((res) => res.data);
  },
};



// 요청 인터셉터 (요청 전 처리)
apiClient.interceptors.request.use(
  (config) => {
    // 토큰이 있다면 헤더에 추가
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

// 응답 인터셉터 (응답 후 처리)
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // 401 에러 시 로그인 페이지로 리다이렉트
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  }
);



