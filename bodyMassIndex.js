const bmi = {
    underwight: 18.5,
    normal: 25,
    overwight: 29,
    obese: 30
}

function getKeyByValue(object, value) {                            //// Get a key from object by value
    return Object.keys(object).find(key => (object[key] >= value || object[key] === value)); 
} 

function bodyMassIndex(weight, height) {
    return Math.round(weight / ((height * height) / 10000)).toFixed(0);
}

function solve() {
    return function(name, age, weight, height) {
        let BMI = bodyMassIndex(weight, height);
        return obj = {
            name: name,
            personalInfo:{
                age: age,
                weight: weight,
                height: height
            },
            BMI: BMI,
            status: getKeyByValue(bmi, +BMI)
        }
    }
}

let fisrtTest = solve();
let secondTest = solve();

console.log(fisrtTest('peter', 29, 75, 182));
console.log(secondTest('penka', 29, 57, 137));
