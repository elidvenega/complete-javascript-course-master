/*function describeCountry(country,population,capitalCity) {
    const allInformation = `This country ${country} has this amount of ${population} and is capital ${capitalCity}`
    return allInformation;
}

const finland = describeCountry('Finland','6 million','Helsinki');
console.log(finland);

const country1 = describeCountry("Konoha", "10,000","Village in leaf");
console.log(country1);
const country2 = describeCountry("US","330 milion", "Washington");
console.log(country2);*/

/*function percentageOfWorld1(population) {
const percent = (population / 7900) * 100;
return percent;
}

console.log(percentageOfWorld1(1441));


const percentageOfWorld2 = function(population) {
const percent = (population / 7900) * 100;
return percent;

}

console.log(percentageOfWorld2(900));


const percentageOfWorld3 = (population) => {
const percent = (population / 7900) * 100;
return percent;
};
console.log(percentageOfWorld3(1200));*/


function percentageOfWorld1(population) {
    const percent = population / 7900 * 100;
    return percent;
}
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);