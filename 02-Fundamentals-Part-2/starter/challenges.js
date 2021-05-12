// Coding Challenge #1

// 1. Use array and insert it into function with given temperature


// const printForecast = function (arr) {
//     return `...the temperature is ${arr}`;
// }

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const temperature = [];

// for (let temp = 0; temp < data1.length; temp++) {
//     const test = printForecast(data1[temp]);
//     temperature.push(test + data1[temp]);
// }

// console.log(temperature);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ...`;
    }
    console.log('...' + str);
}

printForecast(data1);







// coding challenge 2
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
let scoreKoalas = calcAverage(65, 54, 40);


const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log('dolphin wins');

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('koalas wins');

    } else {
        console.log('No team wins...');
    }

}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(20, 50)


// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/


/*
// Coding Challenge 2
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// console.log(bills,tips);
console.log(tips[0], tips[1], tips[2]);*/

// coding challenge 3
/*const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }

}

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.bmi >= john.bmi ? 'Mark has bigger BMI': 'John has bigger BMI');

// Jonas Solution

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi})
    is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi})
    is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}*/

// Coding Challenge 4
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let a = 0; a < bills.length; a++) {
    const tip = calcTip(bills[a]);
    tips.push(tip);
    totals.push(tip + bills[a]);
}

console.log(totals);