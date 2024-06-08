/// Feeling Loopy - Original Problem ///

const csvData =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// let cell = '';
// let row = [];
// let rows = [];

// for (let i = 0; i < csvData.length; i++) {
//   let char = csvData[i];

//   if (char === ',') {
//     row.push(cell);
//     cell = '';
//   } else if (char === '\n') {
//     row.push(cell);
//     rows.push(row);
//     console.log(...row);
//     row = [];
//     cell = '';
//   } else {
//     cell += char;
//   }
// }

// Part 1 : Refactoring Old Code

//Option 1
let newArray = csvData.split('\n');

let dataArray = [];

for (let i = 0; i < newArray.length; i++) {
  let data = newArray[i].split(',');
  dataArray.push(data);
}

console.log(newArray);
console.log(dataArray);

// Part 2: Expanding Functionality

let cellHeaders = [];

for (let i = 0; i < dataArray[0].length; i++) {
  cellHeaders.push(dataArray[0][i]);
}
console.log(cellHeaders);

// Part 3: Transforming Data
