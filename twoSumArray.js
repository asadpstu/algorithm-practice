var number = [2,3,4,6,7,11,15,17];
var targetResult = 11;



for(var i=0;i<number.length - 1;i++){

    var initial = i;
    var last    = number.length - 1;
    var j = initial;
    while( j < number.length){
        if(number[initial] + number[last] > targetResult)
        {
          last = last - 1;
        }
        else if(number[initial] + number[last] < targetResult)
        {
          initial = initial + 1;
        }

        else if(number[initial] + number[last] === targetResult)
        {
            console.log("Found result");
            return console.log([initial,last]);
          
        }
        else
        {
            console.log("no result");
            
        }

        j++;
    }
}



