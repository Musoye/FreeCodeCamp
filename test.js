const password_test = ['*Look123', 'Bicycle347&', 'Look234*', '*123Look', '*Look123', '132Look*']
const pattern = /([A-Z]+\w+\d+\W+)/; //checks for at least an uppercase,a number and 
let i = 0;
while (i < 4){
    if ((password_test[i]).match(pattern))
    {
        console.log(password_test[i] + ' is correct to use as a password'); 
    }
    else{
        console.log('Alas! ' + password_test[i] + ' is not correct to use as a password'); 
    }
    i++;
}

// let match = string.match(pattern);
// console.log(match);
// while (match){
//     console.log(match[1]);
//     break;
// }