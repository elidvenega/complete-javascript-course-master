'use strict';
////////////////////////////////////////////////////////////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH234', 3, 455);
createBooking('LH234', undefined, 255);

// Pass by value and argument
const flight = 'LH235';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 3245422,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 3245422) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

console.log(checkIn(flight, jonas));
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random());
};

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer('Jonas is the best', upperFirstWord);
transformer('Jonas is the best', oneWord);
