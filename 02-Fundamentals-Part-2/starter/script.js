'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense)  console.log('I can drive :D');

const private = 'Audio';*/

// Functions

/*function logger() {
    console.log('My name is Jonas');
}

// calling / running/ invoking
logger();
logger();
logger();

function fruitProcessor(apples,oranges) {
        console.log(apples,oranges);
        const juice = `Juice with ${apples} apples and ${oranges} oranges`;
        return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);*/

// DRY Do Not Repeat Yourself

// functions Declaration 

/*function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2007)

console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} reires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bob')); */

/*function cutFruitPieces(fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));*/

/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1
    }

    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement(1965, 'Jonas'));*/

// Arrays
/*const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

friends.push('eli');
console.log(friends);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1,age2,age3,age4);

const ages = []*/

// Array Methods
/*const friends = ['Michael', 'Steven', 'Peter'];
friends.unshift('Elid');
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));

// ES6 method includes
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friends called Steven');
}*/

// Objects
// key value pairs
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael','Peter', 'Steven']
// };

// Dot vs Bracket notation
/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his
best friend is ${jonas.friends[0]}`);*/

// object methods

/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter', 'Steven'],
    hasDriversLicense: true,*/

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

   /* calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}
        year old ${jonas.job}, and he has ${this.hasDriversLicense
        ? 'a': 'no'} drivers license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas['calcAge'](1991));
console.log(jonas.age);

console.log(jonas.getSummary());*/

// Looping through arrays 
const jonas = ['Jonas','Schmedtmann', 2037 - 1991 , 'teacher',
['Michael','Peter','Steven']];

for(let i=0; i < jonas.length; i++) {
    console.log(jonas[i]);
}












































