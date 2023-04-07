// types.ts
import type {InternalAxiosRequestConfig, AxiosResponse} from 'axios';

// 请求拦截
export interface RequestInterceptor {
    requestInterceptor?(value: InternalAxiosRequestConfig): (Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig)

    requestInterceptorCatch?(err: any): any
}

// 响应拦截
export interface ResponseInterceptor {
    responseInterceptor?(value: AxiosResponse): Promise<AxiosResponse>

    responseInterceptorCatch?: (err: any) => any
}