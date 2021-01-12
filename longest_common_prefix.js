/*

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/


var strs = ["flower", "flow", "flight"];
if (strs.length === 0) return "";
var result = "";
var firstWord = strs[0];
var firstWordArray = firstWord.split('');
for (var i = 0; i < firstWordArray.length; i++) {
    var count = 1;
    for (var j = 1; j < strs.length; j++) {

        if (strs[j].charAt(i) === firstWordArray[i]) {
            count++;
        }
    }

    if (count === strs.length) {
        result = result + "" + firstWordArray[i]
    }
    else {
        break;
    }
}

return console.log(result);