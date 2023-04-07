import axios from 'axios';
import type {AxiosInstance, InternalAxiosRequestConfig,AxiosRequestConfig} from 'axios';
import qs from 'qs';
import {RequestInterceptor, ResponseInterceptor} from "./types";

class Request {
    instance: AxiosInstance;

    constructor(baseUrl: string, config?: InternalAxiosRequestConfig) {
        this.instance = axios.create({
            baseURL: baseUrl,
        });
        this.instance.interceptors.response.use((res) => {
            return res.data;
        })
        !!config && this.instance(config);
    }

    post(url: string, data?: object, config?: AxiosRequestConfig) {
        return this.instance.post(url, data, config);
    }

    postForm(url: string, data?: object, config?: AxiosRequestConfig) {
        Object.assign({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, config);
        return this.instance.post(url, data, config);
    }

    postMulti(url: string, data?: object, config?: AxiosRequestConfig) {
        Object.assign({
            headers: {'Content-Type': 'multipart/form-data'}
        }, config);
        return this.instance.post(url, data, config)
    }

    get(url: string, params?: object, config?: AxiosRequestConfig) {
        if (params) {
            const query = qs.stringify(params);
            url = url + query;
        }
        return this.instance.get(url, config)
    }

    addRequestInterceptor(interceptor: RequestInterceptor) {
        return this.instance.interceptors.request.use(interceptor.requestInterceptor, interceptor.requestInterceptorCatch);
    }

    addResponseInterceptor(interceptor: ResponseInterceptor) {
        return this.instance.interceptors.response.use(interceptor.responseInterceptor, interceptor.responseInterceptorCatch);
    }
}

export default Request;