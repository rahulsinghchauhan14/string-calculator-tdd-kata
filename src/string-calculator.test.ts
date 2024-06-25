const { add,getCustomDelimiter } = require('./index');

describe("add module", () => {
    
    test('string is empty should return 0', ()=>{
        expect(add("")).toBe(0);
    });

    test('numbers of array is empty should return 0', () => {
        expect(add("//;\n")).toBe(0);
    });

    test('get custom delimiters', () => {
        expect(getCustomDelimiter("//;\n1;2")).toBe(';');
    });

    test('string contain negative number should throw an error', () => {
        expect(() => add('\n-4;0\n-9')).toThrow(Error);
    });

    
});