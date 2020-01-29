function sortObject(obj) {         //// Sort a Object by values
    let arr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort((a, b) => b.value - a.value);
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    return arr;
}

function solve1() {
    let arr = [...arguments];
    let obj = {};
    
    arr.map(x => {
        if(!obj[typeof(x)]) {
            obj[typeof(x)] = 0;
        }
        obj[typeof(x)]++;
        console.log(`${typeof(x)}: ${x}`); 
    }).join('\n');
    
    let sortedArrayFromObj = sortObject(obj);
    sortedArrayFromObj.map(x => console.log(`${x.key} = ${x.value}`));    
}

solve1('cat', 23, 42, function() { console.log('hello'); });

