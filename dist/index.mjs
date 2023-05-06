// index.ts
import axios from "axios";
import qs from "qs";
var Request = class {
  constructor(config) {
    this.instance = axios.create(config);
    this.instance.interceptors.response.use((res) => {
      return res.data;
    });
    this.instance.defaults.timeout = 2500;
  }
  post(url, data, config) {
    return this.instance.post(url, data, config);
  }
  postJSON(url, data, config) {
    Object.assign({
      headers: {
        "Content-Type": "application/json"
      }
    }, config);
    return this.instance.post(url, data, config);
  }
  postForm(url, data, config) {
    Object.assign({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }, config);
    return this.instance.post(url, data, config);
  }
  postMulti(url, data, config) {
    Object.assign({
      headers: { "Content-Type": "multipart/form-data" }
    }, config);
    return this.instance.post(url, data, config);
  }
  get(url, params, config) {
    if (params) {
      const query = qs.stringify(params);
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
};
export {
  Request
};
