"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
var axios_1 = require("axios");
var qs_1 = require("qs");
var Request = /** @class */ (function () {
    function Request(config) {
        this.instance = axios_1.default.create(config);
        this.instance.interceptors.response.use(function (res) {
            return res.data;
        });
        this.instance.defaults.timeout = 2500;
    }
    Request.prototype.post = function (url, data, config) {
        return this.instance.post(url, data, config);
    };
    Request.prototype.postForm = function (url, data, config) {
        Object.assign({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, config);
        return this.instance.post(url, data, config);
    };
    Request.prototype.postMulti = function (url, data, config) {
        Object.assign({
            headers: { 'Content-Type': 'multipart/form-data' }
        }, config);
        return this.instance.post(url, data, config);
    };
    Request.prototype.get = function (url, params, config) {
        if (params) {
            var query = qs_1.default.stringify(params);
            url = url + query;
        }
        return this.instance.get(url, config);
    };
    Request.prototype.addRequestInterceptor = function (interceptor) {
        return this.instance.interceptors.request.use(interceptor.requestInterceptor, interceptor.requestInterceptorCatch);
    };
    Request.prototype.addResponseInterceptor = function (interceptor) {
        return this.instance.interceptors.response.use(interceptor.responseInterceptor, interceptor.responseInterceptorCatch);
    };
    return Request;
}());
exports.Request = Request;
