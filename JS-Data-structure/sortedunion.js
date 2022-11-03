function uniteUnique(arr1, arr2, arr3) {
    const newarr = [];
  
    for (let i = 0; i < arguments.length; i++){
      let anarry = arguments[i];
  
      for (let j = 0; j < anarry.length; j++)
      {
        if (newarr.indexOf(anarry[j]) < 0){
          newarr.push(anarry[j]);
        }
        
      }
    }
    return newarr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);