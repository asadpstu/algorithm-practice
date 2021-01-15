/*
315. Count of Smaller Numbers After Self
Hard

3064

97

Add to List

Share
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 

Constraints:

0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

*/
var nums = [5, 2, 6, 1];
var newArray = [];
for (var i = 0; i < nums.length; i++) {
    var candidate = nums[i];
    var count = 0;
    for (var j = i; j < nums.length; j++) {
        if (candidate > nums[j] && i != j) {
            count++
        }
    }
    newArray.push(count);
}
return console.log(newArray); 