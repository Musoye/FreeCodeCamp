// Search and replace word before and replace it with after in the str and maintain their case
function myReplace(str, before, after) {
    let newstr = str.split(' ');
    for (let i = 0; i < newstr.length; i++)
    {
      if (newstr[i] === before)
      {
        if (/^[A-Z]/.test(newstr[i]))
        {
          newstr[i] = after.charAt(0).toUpperCase() + after.slice(1); 
          //console.log(newstr[i])
          return newstr.join(' ');
        }
        else {
          newstr[i] = after.toLowerCase();
          return newstr.join(' ');
        }
      }
    }
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  console.log(myReplace("Let us go to the store", "store", "mall"));
