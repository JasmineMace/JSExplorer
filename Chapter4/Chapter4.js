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

console.log(sum(range(1, 10)));

console.log(range(10, 3, -1))

module.exports = {
    range,
    sum
}