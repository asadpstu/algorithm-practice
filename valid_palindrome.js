/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 

Constraints:

s consists only of printable ASCII characters.

*/

var s = "A man, a plan, a canal: Panama";
var strArray = s.toLowerCase();
var newstr = '';
for (var i = 0; i < strArray.length; i++) {

    if ((strArray.charCodeAt(i) >= 97 && strArray.charCodeAt(i) <= 122)) {
        newstr = newstr + strArray[i];
    }
    else {
        var tryToConvInt = parseInt(strArray[i])
        if (tryToConvInt >= 0 && tryToConvInt <= 9) {
            newstr = newstr + strArray[i];
        }
    }
}
var temp = '';
for (var j = newstr.length - 1; j >= 0; j--) {
    temp = temp + newstr[j];
}
if (temp === newstr) return console.log(true);
else return console.log(false);