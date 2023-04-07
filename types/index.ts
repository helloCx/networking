// types.ts
import axios from "axios";


// 请求拦截
export interface RequestInterceptor {
    requestInterceptor?(value: axios.AxiosRequestConfig): (axios.AxiosRequestConfig | Promise<axios.InternalAxiosRequestConfig>)
    requestInterceptorCatch?(err: any) : any
}

// 响应拦截
export interface ResponseInterceptor {
    responseInterceptor?(value: axios.AxiosResponse):Promise<axios.AxiosResponse>
    responseInterceptorCatch?: (err: any) => any
}