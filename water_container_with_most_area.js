/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2

*/

function maxarea() {
    var height = [1,8,6,2,5,4,8,3,7]; //[4,3,2,1,4]  //[1,2,1]
    var area = [0];
    var startPointer = 0;
    var nextPointer  = height.length - 1;
    
    if(height.length == 2){
      callCalculate(0,1, height, area);  
    }
    else
    {
        for(var i=0;i<= height.length - 2;i++){

          startPointer = height[i];
          nextPointer  = height[height.length - 1 ];
          callCalculate(i,height.length - 1, height, area);  
        }        
    }
    return area[0];
}

function callCalculate(startPointer, nextPointer, heightArray, area){

    x = nextPointer - startPointer;
    var initialHeight = heightArray[startPointer];
    var nextHeight = heightArray[nextPointer];
    var toConsider = null;
    if(initialHeight <= nextHeight){
        toConsider = initialHeight;
    }
    else toConsider = nextHeight;
    
    var currentArea = x * toConsider;
    if(area[0] < currentArea) area[0] = currentArea;
    nextPointer--;
    if(startPointer > nextPointer)
    {
        return area;
    }
    else
    {
      callCalculate(startPointer, nextPointer, heightArray, area);   
    }

}