// Original code:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Predict hoisting:
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// var genre;
// console.log(genre); // output: undefined
// genre = 'disco';
// rewind(); // output: 'rock'; 'r&b'
// console.log(genre); // output 'disco'

// Output: undefined, rock, r&b, disco