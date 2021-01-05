/*
202. Happy Number
Easy

2735

476

Add to List

Share
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1

*/

function root(n) {
    var str = n.toString();
    recursion(str);
}


function recursion(str) {
    if (str.length == 1 && parseInt(str) === 1) return console.log(true);
    else if (str.length == 1 && parseInt(str) !== 1) return console.log(false);
    else {
        var i = 0;
        sum = 0;
        while (i < str.length) {
            sum = sum + parseInt(str[i]) * parseInt(str[i]);
            i++;
        }
        str = sum.toString();
        recursion(str);
    }

}

root(2);