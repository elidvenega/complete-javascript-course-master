// // let js = 'amazing';
// // if (js === 'amazing') alert('Javascript');

// // value
// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

// // descriptive variable names

// let myFirstJob = "Caregiver";
// let myCurrentJob = "Lab Tech";

// console.log(myFirstJob);

/*let a = "helloooo";

console.log(typeof a);

// Dynamic typing
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

// a bug thats not corrected
console.log(typeof null); */

/*let age = 30;
age= 31;
console.log(age);

const birthYear = 1991;
//birthYear = 1990;

var job = 'programmer';
job = 'teacher';
console.log(job);*/

// operators

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1998;
console.log(ageSarah,ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + ' ' + lastName);

let x = 10 + 5;*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2023;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas,ageSarah, averageAge);*/

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear)
+ ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - 
birthYear} year old ${job}!`;

console.log(jonasNew);*/

/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/

// type conversion 
/*const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '10' - 3);
console.log('23' > '18');*/

// falsy and truthy
/*if(2 == 2) {console.log(true);}

let height = "5 feet"

if(height) {
    console.log('Yay height is defined');
} else {
    console.log("Height is Undefined");
}*/

/*const age = 18;
if(age === 18) console.log('You just became an adult (strict)');

if(age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if(favorite === 23) {
    console.log("Cool! 23 is an amazing number");
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log('Someone else should drive..');
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log('Someone else should drive..');
}










