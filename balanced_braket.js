//var string ="([])(){}(())()()";
var string = "([])(){}(())()(";
var condition = {
    ")": "(",
    "}": "{",
    "]": "["
};

var toPush = "({[";
var toPop = ")}]";
var tempArray = [];
for (var i = 0; i <= string.length - 1; i++) {

    if (toPush.includes(string.charAt(i))) {
        tempArray.push(string.charAt(i));
    }
    else {
        if (toPop.includes(string.charAt(i))) {
            if (tempArray.length === 0) {

                return console.log("false");
            }
            else {
                if (tempArray[tempArray.length - 1] === condition[string.charAt(i)]) {
                    tempArray.pop()
                }
                else {
                    return console.log("false");
                }
            }
        }

    }

}

if (tempArray.length === 0) {
    return console.log("true");
}
else return console.log("false");

