function steamrollArray(arr) {
    const strArray = [];
     // Loop over array contents
     for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])) {
         // Recursively flatten entries that are arrays
         //  and push into the strArray
         strArray.push(...steamrollArray(arr[i]));
       } else {
         // Copy contents that are not arrays
         strArray.push(arr[i]);
       }
     }
     return strArray;
   }
   
   steamrollArray([1, [2], [3, [[4]]]]);
   console.log(steamrollArray([1, {}, [3, [[4]]]]) );