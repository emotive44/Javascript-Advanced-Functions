
function splitCriteria(array, criteria) {
    return array.split(criteria)[1];
}

function solve3(data, crt) {
    let objects = JSON.parse(data);
    let criteria = splitCriteria(crt, '-');
    let keys = Object.keys(objects[0]);
    let count = -1;
    
    for(let j = 0; j < objects.length; j++) {
        for(let i = 0; i < keys.length; i++) {
            if(objects[j][keys[i]] === criteria) {
                count++;
                console.log(`${count}.${objects[j].firstName} ${objects[j].lastName} - ${objects[j].email}`);
            }
        } 
    }
}

solve3('[{"id": "1", "firstName": "Pesho", "lastName": "Peshov", "email": "pesho@abv.bg", "gender": "Female"}, {"id": "2", "firstName": "Goshka", "lastName": "Goshkova", "email": "goshka@abv.bg", "gender": "Female"}, {"id": "3", "firstName": "Kuci", "lastName": "Peshov", "email": "pesho@abv.bg", "gender": "Female"}]', 'lastName-Peshov');
