

// const hund = {
    //     '1': "",
    //     '2': "",
    //     '3': "",
    //     '4': "",
    //     '5': "",
    //     '6': "",
    //     '7': "",
//     '8': "",
//     '9': "",
// };


module.exports = function toReadable (number) {
    const num = {
        '0': "zero",
        '1': "one",
        '2': "two",
        '3': "three",
        '4': "four",
        '5': "five",
        '6': "six",
        '7': "seven",
        '8': "eight",
        '9': "nine",
        // '10': "ten",
        '11': "eleven",
        '12': "twelve",
        '13': "thirteen",
        '14': "fourteen",
        '15': "fifteen",
        '16': "sixteen",
        '17': "seventeen",
        '18': "eighteen",
        '19': "nineteen"};
        
        const ten = {
        '1': "ten",
        '2': "twenty",
        '3': "thirty",
        '4': "forty",
        '5': "fifty",
        '6': "sixty",
        '7': "seventy",
        '8': "eighty",
        '9': "ninety"};

    let arr = number.toString().split('');
    let result;
// look one number
    if (arr.length === 1) {
        result = num[arr[0]];
        }
// look decimal
    if (arr.length === 2) {
        if (arr[0] == 1) {
            result = num[arr.join('')];            
        } 
            if (arr[1] == 0) {
                result = ten[arr[0]];            
            } 
                if (arr[0] > 1 && arr[1] != 0 ) {
                    // result = ten[arr[0]];            
                    result = ten[arr[0]] + ' ' + num[arr[1]] ;            
                } 
        }
// look hundreds
    if (arr.length === 3) {
        if (arr[2] == 0 && arr[1] == 0) {
            result = num[arr[0]] + ' hundred';            
        } 
            if (arr[2] == 0 && arr[1] != 0) {
                result = num[arr[0]] + ' hundred ' + ten[arr[1]];            
            } 
                if (arr[2] != 0 && arr[1] < 2) {
                    result = num[arr[0]] + ' hundred ' + num[arr[1]+arr[2]];           
                } 
                    if (arr[2] != 0 && arr[1] > 1) {
                        result = num[arr[0]] + ' hundred ' + ten[arr[1]] + ' ' + num[arr[2]];           
                    } 
                        if (arr[2] != 0 && arr[1] == 0) {
                            result = num[arr[0]] + ' hundred ' + num[arr[2]];           
                        } 
        }

return result; 
}
