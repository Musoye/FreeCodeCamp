// Palindrome: it removes special character and hyphen and afterwrds it test for palindrome.
function palindrome(str) {
    let newStr = str.slice()
    const regex = /\W+/gi;
    let sitr = newStr.replace(regex, '');
    sitr = sitr.split('_')
    sitr = sitr.join('').trim().toLowerCase();  
    let newsitr = sitr.split('').reverse().join('');
    if (sitr == newsitr){
      return true;
    }
    return false; 
  }




  //tests
palindrome("eye"); //true
palindrome("_eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("never odd or even"); //true
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("five|\_/|four"); //false

//console.log(a);
//console.log(b);