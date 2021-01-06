const calcAverage =  (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,40);


const checkWinner = function (avgDolphins, avgKoalas) {
    
    if (avgDolphins  >= 2 * avgKoalas) {
        console.log('dolphin wins');
        
    } else if (avgKoalas >=  2 * avgDolphins) {
        console.log('koalas wins');

    } else {
        console.log('No team wins...');
    }

}

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(20,50)


// Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49


const calcAge = function (birthYear) {
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

    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement(1965, 'Jonas'));