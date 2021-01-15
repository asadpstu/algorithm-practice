/*
42. Trapping Rain Water
Hard

9526

145

Add to List

Share
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

*/
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var totalTrapWater = 0;
for (var i = 1; i < height.length - 1; i++) {
    var elevation = height[i];

    var leftHighest = height[i];
    var rightHighest = height[i];

    // find heighest left elevation
    for (var j = i; j >= 0; j--) {
        if (height[j] > leftHighest) {
            leftHighest = height[j];
        }
    }


    // find heighest right elevation
    for (var k = i; k < height.length; k++) {
        if (height[k] > rightHighest) {
            rightHighest = height[k];
        }
    }

    console.log("Elevation:", height[i], "left-Highest:", leftHighest, "Right-Highest:", rightHighest)

    var trapWater = Math.min(rightHighest, leftHighest) - elevation;
    totalTrapWater = totalTrapWater + trapWater;
}

return console.log(totalTrapWater);