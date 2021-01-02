function describeCountry(country,population,capitalCity) {
    const allInformation = `This country ${country} has this amount of ${population} and is capital ${capitalCity}`
    return allInformation;
}

const finland = describeCountry('Finland','6 million','Helsinki');
console.log(finland);

const country1 = describeCountry("Konoha", "10,000","Village in leaf");
console.log(country1);
const country2 = describeCountry("US","330 milion", "Washington");
console.log(country2);