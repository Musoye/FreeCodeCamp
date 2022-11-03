// pairing of DNA element to form DNA helix case AT, CG
function pairElement(str) {
    let newarr = [...str];
    let newstr = [];
    for (let i = 0; i < newarr.length; i++)
    {
      if (newarr[i] === 'A')
      {
        newstr.push(['A','T']);
      }
      else if (newarr[i] === 'T')
      {
        newstr.push(['T','A']);
      }
      else if (newarr[i] === 'C')
      {
        newstr.push(['C', 'G']);
      }
      else
      {
        newstr.push(['G','C']);
      }
    }
    return newstr;
  }
  
  pairElement("GCG");
  console.log(pairElement("TTGAG"));