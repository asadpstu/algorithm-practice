/*
128. Longest Consecutive Sequence
Hard

4487

218

Add to List

Share
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

Follow up: Could you implement the O(n) solution? 

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 104
-109 <= nums[i] <= 109

*/
var nums = [9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]
if (nums.length == 0) return 0;
if (nums.length == 1) return 1;
nums.sort(function (a, b) { return a - b });

nums = [...new Set(nums)];
var length = 0;
var count = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] == 1) {
        count++;
    }
    else {
        if (count > length) {
            length = count; count = 0;
        }
        else {
            count = 0;
        }

    }
}

return console.log(length + 1);