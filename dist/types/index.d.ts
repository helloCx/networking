import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
export interface RequestInterceptor {
    requestInterceptor?(value: InternalAxiosRequestConfig): (Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig);
    requestInterceptorCatch?(err: any): any;
}
export interface ResponseInterceptor {
    responseInterceptor?<T>(value: AxiosResponse): Promise<T>;
    responseInterceptorCatch?: (err: any) => any;
}
