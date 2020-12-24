var array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
//var array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];
var direction = null;


var cool = true;
var initial = 0;
var next = 1;
for(var i=0; i < array.length - 1; i++)
{
    
    while(next <= array.length - 1){
      var current = array[initial];
      var check   = array[next]
      // if cool true
      if(cool === true){
        console.log("...")  
        if(current === check) {
            //remain cool
            cool = false;
        }    
        //determining increasing or decreasing
        else if(current > check)
        {
            direction = "negative";
        }
        else
        {
            direction = "positive"; 
        }
      }
      next++; 
      initial++; 
      console.log("Got direction:"+direction);
    }
      //once cool is
        if(direction === "negative")
        {
            // -1 we have used coz we will always check untill the last number.
            for(var i=0;i<array.length - 1 ;i++){
                var next = i + 1;
                if(array[i] >= array[next])
                {
                    continue;
                }
                else return console.log("false");
            }
        }
        if(direction === "positive")
        {
            // -1 we have used coz we will always check untill the last number.
            for(var i=0;i<array.length - 1 ;i++){
                var next = i + 1;
                if(array[i] <= array[next])
                {
                    continue;
                }
                else return console.log("false"); 
            }
        }

        return console.log("true"); 

    
      

}