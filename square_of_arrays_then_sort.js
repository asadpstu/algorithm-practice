function sort() {
  var nums = [-7,-3,2,3,11];
  var array = [];  
  for(var i=0;i<nums.length;i++){
    array.push(Math.abs(nums[i] * nums[i]))  
  }  
  array.sort(function (a,b) { return a-b })  
  return console.log(array);
}

sort();