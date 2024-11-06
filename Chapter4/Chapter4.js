const JOURNAL = require('./journal');

require('./journal')

let journal = [];

function addEntry(events, squirrel) {
     journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasasgna", "touched tree"], false);
addEntry(["work", "cycling", "break", "peanuts", "beer"], false);

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i ++){
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));