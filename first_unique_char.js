/*
387. First Unique Character in a String
Easy

2538

129

Add to List

Share
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.
*/


var s = "loveleetcode";
var newArray = s.split('');
for (var i = 0; i < newArray.length; i++) {
    var candidate = true;
    for (var j = 0; j < newArray.length; j++) {
        if (newArray[i] == newArray[j] && i != j) {
            candidate = false;
            break;
        }
    }

    if (candidate === true) return console.log(i);

}

return console.log(-1);