/**
 * Question : Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 
Complexity: Linear time Complexity
*/
function dropElements(arr, func) {
    let newarr = [...arr];
    for (let i = 0; i < newarr.length; i)
    {
      // I did not increase the i due to the splice method which mutate the array and which make it maintain their initial index and always the length of the array.
      if (func(newarr[i]) === true)
      {
        return newarr;
      }
      else
      {
        newarr.splice(i, 1);
      }
    }
    return [];
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));