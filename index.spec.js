"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
let instance = new index_1.default('localhost:3000/');
describe('networking', () => {
    describe('post', () => {
        it('post', function () {
            instance.post('test');
        });
        // it('postJSON', function () {
        //     instance.postForm();
        // });
        // it('postJSON', function () {
        //     instance.postMulti();
        // });
    });
});
