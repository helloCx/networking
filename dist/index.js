"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var networking_exports = {};
__export(networking_exports, {
  Request: () => Request
});
module.exports = __toCommonJS(networking_exports);
var import_axios = __toESM(require("axios"));
var import_qs = __toESM(require("qs"));
var Request = class {
  constructor(config) {
    this.instance = import_axios.default.create(config);
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
      const query = import_qs.default.stringify(params);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Request
});
