/*
16. 3Sum Closest
Medium

2694

158

Add to List

Share
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/


function threeSumClosest() {
var arrayInput = [1,1,1,0]
var target = -100;    
var finalArray = [];
var closestValue = [];    
arrayInput = arrayInput.sort(function(a,b){return a-b });
 
for(var i=0;i < arrayInput.length - 2 ; i++){
  
  var left = i + 1;
  var right = arrayInput.length - 1;

  while ( left < right)
  {
     var result = arrayInput[i] + arrayInput[left] + arrayInput[right];
     closestValue.push(result);
     if(result === target)
     {

       left = left + 1;
       right = right - 1;
     }
     if(result > target)
     {
         right = right -1 ;
     }
     if( result < target)
     {
         left = left + 1;
     }
  }
}

    
    closestValue.sort(function (a,b) {return a-b} );
    var diff = 0;
    var result = 0;
    var finalResult = null;
    var tempresult  = null;
    
    
    //initial
    if(closestValue[0] > target)
    {
       result = closestValue[0] - target;
       finalResult = closestValue[0];
    }
    else
    {
       result = target - closestValue[0] ; 
        finalResult = closestValue[0];
    }
    
    for(var i=0;i<closestValue.length;i++){
        if(closestValue[i] > target){
          tempresult = closestValue[i] - target;
        }
        else
        {
           tempresult = target - closestValue[i] ; 
        }
        
        if(tempresult < result){
           result = tempresult;
           finalResult =  closestValue[i];
        }
    }
    
    return console.log(finalResult);
    
    
}

threeSumClosest();