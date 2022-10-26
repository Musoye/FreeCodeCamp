const string = 'Bicycle347&';
const pattern = /([A-Z]+\w+\d+\W+)/; //checks for at least a number a symbol and alphabetic character.
console.log(string.match(pattern))
//console.log(pattern.exec(string))
if (string.match(pattern)){
    console.log('It matches');
}
else{
    console.log('It does not matches');
}