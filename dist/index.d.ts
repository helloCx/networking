import * as axios from 'axios';
import { InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from 'axios';

interface RequestInterceptor {
    requestInterceptor?(value: InternalAxiosRequestConfig): (Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig);
    requestInterceptorCatch?(err: any): any;
}
interface ResponseInterceptor {
    responseInterceptor?<T>(value: AxiosResponse): Promise<T>;
    responseInterceptorCatch?: (err: any) => any;
}

declare class Request {
    private instance;
    constructor(config?: AxiosRequestConfig);
    post(url: string, data?: object, config?: AxiosRequestConfig): Promise<axios.AxiosResponse<any, any>>;
    postJSON(url: string, data?: object, config?: AxiosRequestConfig): Promise<axios.AxiosResponse<any, any>>;
    postForm(url: string, data?: object, config?: AxiosRequestConfig): Promise<axios.AxiosResponse<any, any>>;
    postMulti(url: string, data?: object, config?: AxiosRequestConfig): Promise<axios.AxiosResponse<any, any>>;
    get(url: string, params?: object, config?: AxiosRequestConfig): Promise<axios.AxiosResponse<any, any>>;
    addRequestInterceptor(interceptor: RequestInterceptor): number;
    addResponseInterceptor(interceptor: ResponseInterceptor): number;
}

export { Request };
