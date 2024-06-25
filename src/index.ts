export function add(str: string): number{
    
    // return 0 if input string is empty
    if(str==="") return 0;
    
    // get array which contain numbers
    const numbersArray: Array<number> = getNumbersFromString(str);
 
    // check if number of array is empty or not
    if(numbersArray.length == 0){
        return 0;
    }

    return 1;
 
}


function getNumbersFromString(str: string): Array<number>{
    let delimiters = ['//',';','\n'];
    let stringArray: Array<string>;
    delimiters.forEach(delimiter => {
        str = str.split(delimiter).join(',');
    });
    stringArray = str.split(",");
    return stringArray.filter(value => value !== '').map(no => parseInt(no));
}

