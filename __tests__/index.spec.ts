import {Request} from "../index";

const request = new Request();
describe("组合", () => {
  test('hello',()=>{
    console.log(request.get('https://api.mocksys.com/api/v1/mock/10241'));
  })
})