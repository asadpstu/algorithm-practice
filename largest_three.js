var array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

var newArray = array.sort(function (a, b) { return b - a });
var data = newArray.slice(0, 3);
console.log(data.sort(function (a, b) { return a - b }));


