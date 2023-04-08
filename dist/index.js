"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
class Request {
    constructor(config) {
        this.instance = axios_1.default.create(config);
        this.instance.interceptors.response.use((res) => {
            return res.data;
        });
        this.instance.defaults.timeout = 2500;
    }
    post(url, data, config) {
        return this.instance.post(url, data, config);
    }
    postForm(url, data, config) {
        Object.assign({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, config);
        return this.instance.post(url, data, config);
    }
    postMulti(url, data, config) {
        Object.assign({
            headers: { 'Content-Type': 'multipart/form-data' }
        }, config);
        return this.instance.post(url, data, config);
    }
    get(url, params, config) {
        if (params) {
            const query = qs_1.default.stringify(params);
            url = url + query;
        }
        return this.instance.get(url, config);
    }
    addRequestInterceptor(interceptor) {
        return this.instance.interceptors.request.use(interceptor.requestInterceptor, interceptor.requestInterceptorCatch);
    }
    addResponseInterceptor(interceptor) {
        return this.instance.interceptors.response.use(interceptor.responseInterceptor, interceptor.responseInterceptorCatch);
    }
}
exports.default = Request;
