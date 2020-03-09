

function filterArray(inputArray, valueToCompare=0){
    debugger
    if(valueToCompare == 0){
      return inputArray.filter(x=>x > 0);
    }
    else{
       return inputArray.filter(x=>x > valueToCompare);
    }
    
}