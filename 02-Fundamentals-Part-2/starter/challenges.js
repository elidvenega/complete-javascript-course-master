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
checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge 2
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// console.log(bills,tips);
console.log(tips[0], tips[1], tips[2]);

