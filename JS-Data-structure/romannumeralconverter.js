// Question: Write an algorithm that convert number to roman numeral
// Roman Numeral.
function convertToRoman(num) {
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let Numeral = '';
  
    while (num !== 0){
      let index = arabic.findIndex(nums => num >= nums);
      Numeral += roman[index];
      num -= arabic[index];
    }
   return Numeral;
  }
  
  let a = convertToRoman(502);
  console.log(a)