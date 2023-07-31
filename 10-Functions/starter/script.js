'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}
        flight ${this.iataCode} ${flightNum}`);
  },
};

lufthansa.book(12121, 'Jonas Schmedtmann');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, "Sarah Williams")











