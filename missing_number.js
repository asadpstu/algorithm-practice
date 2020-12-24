/*
https://leetcode.com/problems/missing-number/
*/
var nums = [0,1,3,5,2,7,6]
nums = nums.sort(function(a,b){ return a - b});
if(nums.length === 1) {
    if(nums[0] === 0) return nums[0] + 1;
    if(nums[0] === 1) return nums[0] - 1; 
}
for(var i=0; i< nums.length - 1;i++){
    if(nums[0] !== 0) return 0;
    if(nums[i+1] - nums[i] === 1){
        continue;
    }
    else
    {
        return nums[i] + 1;        
    }
}
return nums[nums.length -1 ] + 1;

