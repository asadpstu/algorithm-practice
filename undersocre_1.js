var str = "([)](){}(())()"
var arr = str.split('');
var newArray = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (newArray.length === 0) {
        newArray.push(arr[i])
    }
    else {
        var checkLastElemnt = newArray[newArray.length - 1];
        var currentElement = arr[i];
        if (checkLastElemnt == "(" && currentElement == ")") newArray.pop();
        else if (checkLastElemnt == "{" && currentElement == "}") newArray.pop();
        else if (checkLastElemnt == "[" && currentElement == "]") newArray.pop();
        else newArray.push(currentElement);

    }
}

if (newArray.length === 0) console.log("Balanced", newArray)
else console.log("Not balanced", newArray);