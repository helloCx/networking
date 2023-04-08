import type { AxiosRequestConfig } from 'axios';
import { RequestInterceptor, ResponseInterceptor } from "./types";
declare class Request {
    private instance;
    constructor(config?: AxiosRequestConfig);
    post(url: string, data?: object, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    postForm(url: string, data?: object, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    postMulti(url: string, data?: object, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    get(url: string, params?: object, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    addRequestInterceptor(interceptor: RequestInterceptor): number;
    addResponseInterceptor(interceptor: ResponseInterceptor): number;
}
export { Request };
