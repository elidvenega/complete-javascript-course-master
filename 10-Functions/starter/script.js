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
