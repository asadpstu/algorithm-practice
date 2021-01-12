/*
34. Find First and Last Position of Element in Sorted Array
Medium

4743

182

Add to List

Share
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/


/*=================================
First solution  O(n) 
=================================

var nums = [5, 7, 7, 8, 8, 10], target = 8;
var length = nums.length;
var newArray = [-1, -1];
var slot = 0;
for (var i = 0; i < length; i++) {
    if (nums[i] == target) {

        if (slot == 0) {
            newArray[slot] = i;
            newArray[slot + 1] = i;
        }
        if (slot >= 1) {
            newArray[1] = i;
        }
        slot++;
    }

}

return console.log(newArray);



/*=================================
Second solution  O(log n)
=================================*/

function searchRange() {
    var nums = [5, 6, 7, 7, 8, 8, 10];
    var target = 8;
    var length = nums.length;
    var middle = 0;
    if (length % 2 == 0) {
        middle = length / 2;

        middle = middleFunc(middle, nums, target)
    }

    else {
        middle = Math.ceil(length / 2);
        middle = middleFunc(middle, nums, target);

    }

    if (middle == -1) middle = 0;


    var newArray = [-1, -1];
    var slot = 0;


    if (nums[middle] <= target) {
        //move right
        for (var i = middle; i < length; i++) {
            if (nums[i] == target) {

                if (slot == 0) {
                    newArray[slot] = i;
                    newArray[slot + 1] = i;
                }
                if (slot >= 1) {
                    newArray[1] = i;
                }
                slot++;
            }
        }
    }

    else {
        //move left
        for (var i = middle; i >= 0; i--) {
            if (nums[i] == target) {
                if (slot == 0) {
                    newArray[slot] = i;
                    newArray[slot + 1] = i;
                }
                if (slot >= 1) {
                    newArray[1] = i;
                }
                slot++;
            }
        }
    }


    return console.log(newArray.sort(function (a, b) { return a - b }));

}


function middleFunc(middle, nums, target) {
    if (nums[middle] == target) {
        while (middle >= 0) {
            if (nums[middle] != target) {

                break;
            }
            middle--;
        }

    }

    return middle;
}

searchRange();