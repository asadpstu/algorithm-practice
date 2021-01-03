var defaultArray = [0, 1, 2, 3, 4, 5, 6];
var searchArray = [4, 5, 6];
var value = 6;

var serachIndex = defaultArray.indexOf(value);
console.log(serachIndex)
var lastIndex = defaultArray.length - 1;
var result = [];
for (var i = 0; i < searchArray.length; i++) {
    var currentIndexLeft = defaultArray.indexOf(searchArray[i]);
    var currentIndexRight = defaultArray.indexOf(searchArray[i]);
    var left = 0;
    while (defaultArray[currentIndexLeft] > defaultArray[serachIndex]) {
        left++;
        currentIndexLeft--;
    }
    console.log("Element :", searchArray[i], defaultArray[serachIndex], left)
    result.push(left, searchArray[i])
    var right = 0;
    while (defaultArray[currentIndexRight] < defaultArray.length - 1) {
        right++;
        currentIndexRight++;
    }


    console.log("Element :", searchArray[i], 6, right + serachIndex)
    if (result[0] > right + serachIndex) {
        result = [];
        result.push(right + serachIndex, searchArray[i])
    }
    //result.push(right + serachIndex, searchArray[i])


}

console.log(result)
console.log("Nearest Date: ", result[1])