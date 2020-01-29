const obj = {
    min: (a, b) => Math.min(a, b),
    sum: (a, b) => a + b,
    max: (a, b) => Math.max(a, b)
};
let arr = [10, 5, 2, 4, 100];

//// IIFE function
(function(array) {
    let keys = Object.keys(obj);
    let str = "";

    for(let i = 0; i < keys.length; i++) {
        str +=`${keys[i]}:${array.reduce(obj[keys[i]])} `;
    } 

    console.log(str.split(' ').join('\n'));
})(arr);
