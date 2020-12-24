    var s = "aabaab!bb";
    var strLength = s.length;
    var i = 0;
    var j = 0;
    var hashTable = s.charAt(0);
    var length = 0;
    var str = null;
    
    if(s.length === 1) return console.log(1,s);
    while(i < strLength - 1 )
    {
      j = i + 1;
      if(hashTable.includes(s.charAt(j)) === true){
          var slice = hashTable.indexOf(s.charAt(j)) + 1;
          hashTable = hashTable.slice(slice);
          hashTable = hashTable + '' + s.charAt(j);    
          
      } 
      else
      {
         hashTable = hashTable + '' + s.charAt(j);      
      }
      i++;  
     
      if(hashTable.length > length){
          length = hashTable.length;
          str = hashTable;
      }  
      
    }
    
    return console.log(length,str);