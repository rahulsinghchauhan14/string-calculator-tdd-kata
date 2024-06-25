const { add } = require('./index');

describe("add module", () => {
    test(' string is empty should return 0', ()=>{
        expect(add("")).toBe(0);
    })
});