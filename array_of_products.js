function arrayOfProducts() {
    var array = [1, 8, 6, 2, 4];
    var result = [];
      for(var i=0;i<array.length;i++)
          {
              var tempArray = [... array];
              tempArray.splice(i,1);
              var currentproduct = 1;
              for(var j=0;j<tempArray.length;j++){
                  currentproduct = tempArray[j] * currentproduct;
              }
              result.push(currentproduct);
          }
      
      return console.log(result);
  }