// // Original code:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Predict hoisting
// function learn() {
//     var dojo;
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = 'san jose'; // error: not a variable
// console.log(dojo);
// learn();
// console.log(dojo);

// Didn't expect this code to run. Somehow declaring a local variable dojo in function skips the 'dojo is not defined' error