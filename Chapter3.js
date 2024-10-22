// 1.Minimum
// const myMin1 = function(x, y) { return x > y ? y : x };
// function myMin2(x, y) { return x > y ? y : x };
// let myMin3 = (x, y) => x > y ? y : x;

// console.log(myMin1(4, 5));
// console.log(myMin2(2, 3));
// console.log(myMin3(-4, 5));

// 2.Recursion
function isEven(n) {
    if (n === 0) return true;
    else if (n === 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(20));

// 3.Bean Counting
function countChar(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            counter++;
        }
    }
    return counter;
}

function countBs(str) {
    return countChar(str, 'B')
}

console.log(countBs('BBBBbwwB'))
console.log(countChar('AwjehAAaa', 'A'))