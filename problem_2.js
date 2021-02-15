// Original code 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Predict hoisting
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// var needle;
// needle = 'haystack';
// test(); // output: 'magnet'