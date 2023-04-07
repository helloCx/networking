import networking from "./index";
let instance = new networking('localhost:3000/');
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
