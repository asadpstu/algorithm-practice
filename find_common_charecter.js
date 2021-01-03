/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

*/
var A = ["bella", "label", "roller"];
var first = A[0];
var len = A.length;
var newArray = []

for (var i = 0; i < first.length; i++) {
    var ch = first.charAt(i);
    var count = 0;
    for (var j = 1; j < len; j++) {
        if (A[j].includes(ch)) count++;
        A[j] = A[j].replace(ch, '')
    }

    if (count == len - 1) newArray.push(ch)
}

return console.log(newArray);