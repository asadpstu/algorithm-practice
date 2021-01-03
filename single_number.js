/*136. Single Number
Easy

5473

182

Add to List

Share
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

var nums = [4, 1, 2, 1, 2]
var obj = {};
for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
        obj[nums[i]]++;
    }
    else {
        obj[nums[i]] = 1;
    }
}



for (var single in obj) {
    if (obj[single] < 2) {
        result = single;
    }
}

return console.log(result);