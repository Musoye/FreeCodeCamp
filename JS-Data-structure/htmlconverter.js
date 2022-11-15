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

  //<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>