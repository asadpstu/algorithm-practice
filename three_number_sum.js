var arrayInput = [8, 10, -2, 49, 14];
var expectedOutput = 57;
var finalArray = [];
//var arrayInput = array;	
//Now sort the array
arrayInput = arrayInput.sort(function(a,b){return a-b });
console.log(arrayInput);

//Iterating through 
//reason of using -2 is we are using left and right pointer 
for(var i=0;i < arrayInput.length - 2 ; i++){
  //set left & right pointer
  var left = i + 1;
  var right = arrayInput.length - 1;

  //now conditional check
  while ( left < right)
  {
     //get sum
     var result = arrayInput[i] + arrayInput[left] + arrayInput[right];
     if(result === expectedOutput)
     {
       var temp = [arrayInput[i],arrayInput[left],arrayInput[right]];
       left = left + 1;
       right = right - 1;
       finalArray.push(temp);

     }
     if(result > expectedOutput)
     {
         right = right -1 ;
     }
     if( result < expectedOutput)
     {
         left = left + 1;
     }
  }
}

 return console.log(finalArray);