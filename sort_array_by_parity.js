https://leetcode.com/problems/sort-array-by-parity-ii/

    var A = [4,2,5,7];
    var even = [];
    var odd = [];
    var newArray = [];
    var tempPop  = null;
    var j = 0;
    for(var i=0; i < A.length;i++){
        if(A[i]%2 === 0)
        {
          even.push(A[i])        
        }
        else
        {
           odd.push(A[i]); 
        }
    }
    
    while(j < A.length){
        if(j%2 === 0)
        {
           newArray.push(even.pop());            
        }
        else newArray.push(odd.pop()); 
        j++;
    }
    return console.log(newArray);