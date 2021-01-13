var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var finalArray = [];
for (var i = 0; i < strs.length; i++) {
    var tempArray = [];

    var str = strs[i];
    var strArray = str.split('');

    for (var j = 0; j < strs.length; j++) {
        if (strs[j] != str) {
            var checkStrArray = strs[j].split('');
            var tempWord = '';
            for (var k = 0; k < strArray.length; k++) {
                var checkChar = strArray[k];
                if (checkStrArray.indexOf(checkChar) != -1) {
                    tempWord = tempWord + '' + checkChar;
                    var getIndex = checkStrArray.indexOf(checkChar);
                    checkStrArray.splice(getIndex, 1);
                }

            }

            if (tempWord == str) {

                tempArray.push(strs[j]);
                strs.splice(j, 1);
            }
        }


    }
    tempArray.push(str);
    finalArray.push(tempArray);
    j = 0;
}

console.log(finalArray)

