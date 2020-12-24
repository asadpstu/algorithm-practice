var array = [3, 6, 0, 0, 6, 3];
var middle = 0;
if(array.length % 2 == 0){
    middle = array.length/2;
}
else{
  middle = Math.floor(array.length/2);  
} 

console.log(middle)
for(var i=0; i < middle;i++){
    //check equal
    if(array[i] === array[array.length- (i+1)]){
        continue;
    }
    else
    {
       return console.log("not a plindrome");
    }
}
return console.log("it a palindrome");