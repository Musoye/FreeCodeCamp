//QuestioN : Write a function for encoding string in caeser cipher / Shift cipher - that encodes it in ROT-13 method that is 13 awys from the current alphabetic position. i.e A-N, B- O

function rot13(str) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rotstr = '';
    for (let i = 0; i < str.length; i++)
    {
      let index = letters.indexOf(str[i]);
      if (index <  0)
      {
        rotstr += str[i];
      }
      else
      {
        let newstr = (index + 13) % 26;
        rotstr += letters[newstr];
      }
    }
  
    return rotstr;
  }
  
  console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
