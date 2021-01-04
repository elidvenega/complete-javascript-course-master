const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (dolphins, koalas) {
        const avgScore = calcAverage(score1, score2, score3);

        if (dolphins <= avgScore) {
            console.log('dolphin wins');
        } else if (koalas <= avgScore) {
            console.log('koalas wins');
        }

    }

    console.log(checkWinner(22,30));


        // Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49


        // const calcAge = function (birthYear) {
        //     return 2037 - birthYear;
        // }

        // const yearsUntilRetirement = function (birthYear, firstName) {
        //     const age = calcAge(birthYear);
        //     const retirement = 65 - age;
        //     if (retirement > 0) {
        //         console.log(`${firstName} retires in ${retirement} years`);
        //         return retirement;
        //     } else {
        //         console.log(`${firstName} has already retired`);
        //         return -1
        //     }

        //     //return `${firstName} retires in ${retirement} years`;
        // }
        // console.log(yearsUntilRetirement(1991, 'Jonas'));
        // console.log(yearsUntilRetirement(1950, 'Mike'));
        // console.log(yearsUntilRetirement(1965, 'Jonas'));