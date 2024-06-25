export function add(str: string): number {

    // return 0 if input string is empty
     if (str === "") return 0;

    // return if value is number
    if(typeof str === 'number') return str;

    // get array which contain numbers
    const numbersArray: Array<number> = getNumbersFromString(str);

    // check if number of array is empty or not
    if (numbersArray.length == 0) {
        return 0;
    }

    // check if array contain negative number
    const isNegative = containNegativeNumber(numbersArray);

    if (isNegative) {
        throw new Error(`negative numbers not allowed ${isNegative}`);
    }

    // add numbers from the string
    const sum = numbersArray.reduce((addNo, no) => addNo + no, 0);
 
    return isNaN(sum) ? 0 : sum;
 
}


function getNumbersFromString(str: string): Array<number> {
    let delimiters = [',', '\n'];
    let stringArray: Array<string>;

    // get custom delimiter and push into the delimiters array
    const cusomtDelimiter = getCustomDelimiter(str);
    if (cusomtDelimiter) {
        delimiters.push('//');
        delimiters.push(cusomtDelimiter);
    }

    delimiters.forEach(delimiter => {
        str = str.split(delimiter).join(',');
    });

    stringArray = str.split(",");
    return stringArray.filter(value => value !== '').map(no => parseInt(no));
}

export function getCustomDelimiter(str: string): string {
    if (str.startsWith('//')) {
        return str[2];
    }
    return '';
}

function containNegativeNumber(numbers: Array<number>): string {
    let negativeNo = numbers.filter(num =>  num < 0);

    return negativeNo.join(",");
}

