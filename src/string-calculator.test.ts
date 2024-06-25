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
        expect(() => add("1\n-2,3")).toThrow(Error);
    });

    test('handle single number', () => {
        expect(add('1')).toBe(1);
    });

    test('handle two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('handle multiple numbers', () => {
        expect(add('1,3,5,6,10')).toBe(25);
    });

    test('handle new line (\/n) between numbers', () => {
        expect(add('1\n3,5')).toBe(9);
    });

    test('handle different delimiters between numbers', () => {
        expect(add('//;1\n3,9;5')).toBe(18);
    });
    
});