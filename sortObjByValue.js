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
