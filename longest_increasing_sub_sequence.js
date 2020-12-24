function longest_increasing_subsequence(){
    //var array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
    var array = [3,4,-1,0,6,2,3];
    //var array = [-1, 2, 1, 2];
    var tempArray = [];
    for(var k=0;k<array.length;k++){
        tempArray[k] = 1; 
    }

    //start calculation 
    var current = 1;
    for(var i=0;i<array.length;i++)
    {   
        var start = 0;
        var end = i+1;     
        recursion(start,end,array,tempArray);
    }

    console.log(tempArray)    
}



function recursion (start,end,array,tempArray){
    console.log(start,end,array,tempArray)
    var startVal = array[start];
    var endVal   = array[end];
    if(startVal == endVal) return;
    if(startVal < endVal)
    {
        var sum = tempArray[start] + 1;
        tempArray[end] = Math.max(tempArray[end],sum);
        start++;
    }
    else
    {
        start++;
    }

  recursion(start,end,array,tempArray);
}

longest_increasing_subsequence();

