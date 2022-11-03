// Fibonacci less than number and ttwo start number are 1's
function sumFibs(num) {
    let prev = 0;
      let curr = 1;
      let result = 0;
      while (curr <= num) {
        if (curr % 2 !== 0) {
          result += curr;
        }
        curr += prev;
        prev = curr - prev;
      }
    
      return result;
    }
    
    console.log(sumFibs(1000));