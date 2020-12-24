// Max sum of no adjacent
// Spiral Traversal

//var array = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
//var array = [[1, 2], [4, 3]];
//var array = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

/*var array = [
    [19, 32, 33, 34, 25, 8],
    [16, 15, 14, 13, 12, 11],
    [18, 31, 36, 35, 26, 9],
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [17, 30, 29, 28, 27, 10]
  ];*/
//   var array = [
//     [27, 12, 35, 26],
//     [25, 21, 94, 11],
//     [19, 96, 43, 56],
//     [55, 36, 10, 18],
//     [96, 83, 31, 94],
//     [93, 11, 90, 16]
//   ];

//var array = [[1], [3], [2], [5], [4], [7], [6]];
//var array = [[1]];
var array = [[1,2,3],[4,5,6],[7,8,9]];
var newArray = [];


var goingRight  = true;
var goingBottom = false;
var goingLeft   = false;
var goingUp     = false;
var i = 0;
var j = 0;


function goingRightFunc(i,j){

   if(array[i][j] == '*') {
     console.log(array);
     console.log(newArray);
     return console.log("Going Right :: Traversal Done");   
   }
   while(array[i][j] && array[i][j] != '*'){
     newArray.push(array[i][j])
     array[i][j] = '*';
     j = j + 1;
   }
   if(!array[i][j] || array[i][j] == '*'){
     i = i + 1;
     j = j - 1; 
     goingDownFunc(i,j); 
   }
}


function goingDownFunc(i,j)
{   
    if(i <= 0 || j <=0 ){
        console.log(newArray); console.log("Going Down :: Traverse Done!");
        return
    } 
    if(array[i][j] == '*') {
        console.log(array);
        console.log(newArray);
        return console.log("Going Down :: Traversal Done");   
      }
    if(array[i][j] != '*'){
        newArray.push(array[i][j]);
        if(i>= 0  && j >= 0)
        {
          array[i][j] = '*';  
        }
        var tempChack = i + 1;
        if(tempChack < array.length){
            if(array[tempChack][j] == '*')
            {
                goingLeftFunc(i,j-1); 
            }
            else 
            {
                goingDownFunc(i+1,j);
            }
        }
        else
        {
            if(i+1 < array.length-1) goingDownFunc(i+1,j);
            else goingLeftFunc(i,j-1);
            
        }
        
    }
    
}


function goingLeftFunc(i,j){
    console.log(i,j);
    if(j == -1){
      console.log(newArray)  
      return console.log("Traverse complete..");  
    } 
    if(array[i][j] == '*'){
      //console.log(array);
      goingUpFunc(i-1,j+1);;
      
    } 
    if(array[i][j] != '*'){
      newArray.push(array[i][j]);
      array[i][j] = '*';      
      j = j - 1;
      console.log(array)
      if(j >= 0) goingLeftFunc(i,j); 
      else goingUpFunc(i-1,j+1);
      
    }
}


function goingUpFunc(i,j){


    if(array[i][j] == '*') { 
        console.log(array);
        console.log(newArray);
        return console.log("Going Up :: Spiral travel complete!!");   
         
    }

    while(array[i][j] != '*'){
        newArray.push(array[i][j]);
        array[i][j] = '*';
        if(i-1 >= 0) {
        i = i - 1;
        if(array[i][j] == '*'){
            console.log("Initiating Ignition",i,j);
            i = i + 1;
            j = j + 1
            goingRightFunc(i,j) 
          }
        }
    }
}

goingRightFunc(i,j);




