const { add } = require('./dist/index');

const inputArr = ['','//;\n1,3;4','2','1,4,3,5', '4\n5',0,'[2,3,4]'];

inputArr.forEach(input => {
    console.log(add(input));
});