/*
5. Longest Palindromic Substring
Medium

9197

622

Add to List

Share
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/


function root() {
    var s = "babad";
    var array = s.split('');
    var resultArray = [''];
    if (array.length == 2 && array[0] === array[1]) {
        return s;
    }

    for (var i = 0; i < array.length - 1; i++) {
        var joker = array[i];
        var newStr = '' + joker;

        var j = i + 1;
        while (j < array.length) {
            var tempStr = '';
            for (var k = i; k <= j; k++) {
                tempStr = tempStr + "" + array[k]
            }
            var checPalindrome = tempStr;
            var result = funcCheckPalindrome(checPalindrome);
            if (result !== false) {
                var res = resultArray[0].length;
                if (res < result.length) {
                    resultArray[0] = result;
                }
            }
            j++;

        }

    }

    if (resultArray[0] == "") {
        return console.log(array[0]);
    }
    else {
        return console.log(resultArray[0]);
    }
}


function funcCheckPalindrome(checPalindrome) {
    var newStr = '';
    var customArray = checPalindrome.split('');
    for (var l = customArray.length - 1; l >= 0; l--) {
        newStr = newStr + "" + customArray[l]
    }

    if (newStr === checPalindrome) {
        return checPalindrome;
    }
    else return false;
}


root();