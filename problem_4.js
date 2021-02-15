// Original code:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Predict hoisting
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// var food;
// food = 'chicken';
// console.log(food); // output: 'chicken'
// eat(); // output: 'half-chicken'