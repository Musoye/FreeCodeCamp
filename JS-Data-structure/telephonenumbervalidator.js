//Question: Write a code that validate the US telephone number and this is the format they do write it below
//  555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
function telephoneCheck(str) {

    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
  }
  
  console.log(telephoneCheck("1(555)555-5555")); //true
  console.log(telephoneCheck("(6054756961)"));//false
  
  