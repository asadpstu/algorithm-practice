/* Number of island problem */

var lengthOfRiver = [];
var onlyLength = [];  
function main(){
	var array = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ];
    
    //var array = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]]
    var count = 0;
    
	for(var i=0;i<array.length;i++){
	    for(var j=0;j<array[i].length;j++){
	        if(array[i][j] === 1)
	        {
	          count++;
	          recursion(array,i,j,count);
	        }
	    }
    }
    
    const result = lengthOfRiver.reduce(function(total, value){
        total[value] = (total[value] || 0 ) + 1;
        return total;
    }, {});

    for(let key in result){
        onlyLength.push(result[key]);
    }
    
    console.log("Total River: " + count);
    console.log("River details:" + JSON.stringify(result));
    console.log("River length in array:" + onlyLength);	
}


function recursion(grid,i,j,count){
    
    if(i<0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) 
    {
     return;   
    }
    lengthOfRiver.push(count);
    grid[i][j] = 0;
    recursion(grid, i+1, j,count);  //up
    recursion(grid, i-1, j,count);  //down
    recursion(grid, i, j+1,count);  //right side travel 
    recursion(grid, i, j-1,count);  //left side travel
}

main();