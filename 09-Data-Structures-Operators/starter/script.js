'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: '24hrs',
  }

};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(img1, ing2, ing3) {
    console.log(`Here is your delicious pasta with  ${img1}
    , ${ing2} and ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*Looking Objects: Object Keys and Value entries */
//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr +=  `${day},`;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

// [key,value]

for(const [key, {open,close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// // Optional chaining lesson
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order ?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto ?.(0, 1) ?? 'Method does not exist');



/*  for of looping arrays */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //for (const item of menu) console.log(item);
// for (const [x, y] of menu.entries())
//   console.log(`${x + 1}: ${y}`);


// NUllish coalescing operator

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*Short circuiting (&& ||)*/
// console.log('----OR----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// console.log('----AND----');
// console.log(0 && 'Jonas');
// console.log('x' && 'Hello');

// if (restaurant.order) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza
// ('mushrooms','spinach');


/*Rest Parameters */
// Unpacks an array
// SPREAD, because RIGHT side of =
/*const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const {
  sat,
  ...weekdays
} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    console.log(numbers);
    let sum = 0;
    for(let i =0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

add(2, 3)
add(5, 3, 7, 2)

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives','spinach');
restaurant.orderPizza('mushrooms', 'onion');*/
// Spread Operators
// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// const starterMenuCopy = [...restaurant.starterMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);

// Spread operators work on Iterables:arrays, maps, sets, NOT Objects
// const str = 'Jonas';
// const letters = [...str, '', 'S,'];
// console.log(letters);
// console.log(str);

// A real world example
// const ingredients = [prompt("Let\'s make pasta! Ingredient 1?"), prompt("Ingredient 2?"),prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1
// })

// const {
//   name,
//   openingHours,
//   categories
// } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {
//   menu = [], starterMenu: starters = [0]
// } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14
// };

// ({
//   a,
//   b
// } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: {open: o, close: c},
// } = openingHours;
// console.log(o,c);


// // Array destructuring
// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// // Function to order food

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// Set and Map
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);

console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Butter Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log();

for(const order of orderSet) console.log(order);

// Example
const staff = ['waiter','chef','waiter','manager','chef','waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);(
console.log(
  new Set(['waiter','chef','waiter','manager',
  'chef','waiter']).size
  );
