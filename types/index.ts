// types.ts
import type {InternalAxiosRequestConfig, AxiosResponse} from 'axios';

// 请求拦截
export interface RequestInterceptor {
    requestInterceptor?(value: InternalAxiosRequestConfig): (Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig)

    requestInterceptorCatch?(err: any): any
}

// 响应拦截
export interface ResponseInterceptor {
    responseInterceptor?<T>(value: AxiosResponse): Promise<T>

    responseInterceptorCatch?: (err: any) => any
}