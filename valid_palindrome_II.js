/*
680. Valid Palindrome II
Easy

2204

137

Add to List

Share
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

*/

function root() {
    var s = "dzpixsvdjecobotafvqrweqfviyfnzkowkyfcmmkeprsqnljywgdcmo";
    var newArray = s.split('');
    var result = checkPalindrome(newArray);
    var result = checkPalindrome(newArray);
    if (result === true) return console.log("true");

    else {
        for (var j = 0; j < newArray.length; j++) {
            var firstSlice = newArray.slice(0, j);
            var secondSlice = newArray.slice(j + 1, newArray.length);
            var newForm = firstSlice.concat(secondSlice);
            var recheck = checkPalindrome(newForm);
            if (recheck === true) return console.log("true");
        }
        return console.log("false");
    }
}



function checkPalindrome(array) {
    var newString = ''
    for (var i = 0; i < array.length; i++) {
        newString = newString + array[i];
    }
    var newStr = '';
    for (var i = array.length - 1; i >= 0; i--) {
        newStr = newStr + array[i]
    }
    if (newStr === newString) return true;
    else return false;
}

root();