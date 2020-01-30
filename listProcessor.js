let arrayOfStrings = ['add hello', 'add hello', 'add again', 'add again', 'add again', 'remove hello', 'add hello', 'print'];
let result = '';
let obj = {
    add: (x) => result += ' ' + x,
    remove: (x) => result = result.replace(x, ''),
    print: () => result
};

function getElement(arr, index) {              //// map array from strings, whoose elemets join and split and 
    return arr
        .map(x => x.split(',')) ///// take the elemet depends of index
        .map(x => x
            .join('')
            .split(' ')[index]);
}

function solve(array) {
    let arr = array.slice();
    let func = getElement(arr, 0);
    let text = getElement(arr, 1);

    func.map((x, i)=> {
        return result = obj[x](text[i]);
    });
    return result.trim();
}

console.log(solve(arrayOfStrings));
