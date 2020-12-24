/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

var input = 10;
var array = [];
//generating array formation
for(var i=1;i<=input;i++){
    var temp = [];
    for(var j=0;j<i;j++){
        temp.push(1);
    }
    array.push(temp);
}
//for this problem we will not consider first and last elemnent
if(input < 3) return array;
for(var k=0;k<array.length;k++)
{
    if(array[k].length == 2)
    {
       //third row middle element
       array[k+1][1] = array[k][0] + array[k][1];
    }

    if(array[k].length >= 3 && array[k].length <input)
    {   var startPosition = 0;
        while( startPosition < (array[k].length -1) ){
            array[k+1][startPosition+1] = array[k][startPosition] + array[k][startPosition+1];
            startPosition++;
        }
    }
}
console.log(array);