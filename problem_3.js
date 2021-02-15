// Original code 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Predict hoisting
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan;
// brendan = 'super cool';
// console.log(brendan); // output: 'super cool'