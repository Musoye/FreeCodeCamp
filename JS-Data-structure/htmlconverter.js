function convertHTML(str) {
    let newarr = str.split('');
    for (var i = 0; i < newarr.length; i++)
    {
        switch (newarr[i]) {
        case "<":
          newarr[i] = "&lt;";
          break;
        case "&":
          newarr[i] = "&amp;";
          break;
        case ">":
          newarr[i] = "&gt;";
          break;
        case '"':
          newarr[i] = "&quot;";
          break;
        case "'":
          newarr[i] = "&apos;";
          break;
      }
    }
    return newarr.join('');
  }
  
  convertHTML("Dolce & Gabbana");