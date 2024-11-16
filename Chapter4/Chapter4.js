// const JOURNAL = require('./journal');

// require('./journal')

// let journal = [];

// function addEntry(events, squirrel) {
//      journal.push({events, squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasasgna", "touched tree"], false);
// addEntry(["work", "cycling", "break", "peanuts", "beer"], false);

// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i ++){
//         let entry = journal[i], index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }

// console.log(tableFor("pizza", JOURNAL));


// let JOURNAL = [
//     { events: ["event1", "event2"] },
//     { events: ["event3"] },
//     { events: ["event4", "event5", "event6"] },
// ];

// for  (let entry of JOURNAL) {
//     console.log(`${entry.events.length} events.`);
// }


// 1.Find the sum of the number in a range
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    total = 0
    for (let element of array) {
       total += element; 
    }
    return total;
}

// console.log(sum(range(1, 10)));

// console.log(range(10, 3, -1))


// 2.Reverse array
function reverseArray(array) {
    let newarray = [];
    for (let element of array) {
        newarray.unshift(element);
    }
    return newarray;
}


function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]]; 
        left++;
        right--;
    }
    return array;
}

// console.log(reverseArrayInPlace([1, 3 ,4]))


// 3.A list

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, num) {
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else return nth(list.rest, num - 1);
}

// console.log(arrayToList([1, 2, 3]));
// console.log(listToArray(arrayToList([1, 2, 3])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));



// 4.Deep equal

function deepEqual(value1, value2) {
    if (value1 === value2) return true;

    if (value1 ==  null || typeof value1 != "object" || value2 == null || typeof value2 != "object") return false;

    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        } 
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
}