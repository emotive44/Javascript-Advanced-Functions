function solution2(currencyFormater) {
    return function(currency) {
        return `${currencyFormater} ${currency.toFixed(2)}`;
    }
}

let dollarFormater = solution2('$');
console.log(dollarFormater(2.90));
console.log(dollarFormater(8890));
