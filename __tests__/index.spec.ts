import Request from "../index";

const request = new Request();
describe("组合", async() => {
  const log = await request.get('https://api.mocksys.com/api/v1/mock/10241');
  console.log(log);
})