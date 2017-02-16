var R = require('ramda')
var accounting = require('accounting')

var CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}]

// Exercise 1:
// ===========
// Use R.compose to rewrite the function below.
// Hint: R.prop is curried.
// // I had a little trouble with this one.

var isLastInStock_old = function(cars) {
  var last_car = R.last(cars)
  return R.prop('in_stock', last_car)
}

var isLastInStock = R.compose(R.prop('in_stock'), R.last)

console.log(isLastInStock(CARS))
console.log(isLastInStock_old(CARS))

// Exercise 2:
// ===========
// Use R.compose, R.prop and R.head to retrieve the name
// of the first car
// // This one was easy.
var nameOfFirstCar = R.compose(R.prop('name'),R.head)

console.log(nameOfFirstCar(CARS))

// Exercise 3:
// ===========
// Use the helper fn _avg to refactor avgDollarValue as a composition
// // Little tougher, took me 3 tries
var _avg = function(xs) {
  return R.reduce(R.add, 0, xs) / xs.length
}

var avgDollarValue_old = function(cars) {
  var dollar_values = R.map(function(c) {
    return c.dollar_value
  }, cars)
  return _avg(dollar_values)
}

var avgDollarValue = R.compose(
  _avg,
  R.map(R.prop('dollar_value')))

console.log(avgDollarValue(CARS))
console.log(avgDollarValue_old(CARS))

// Exercise 4:
// ===========
// Write a fn, sanitizeNames using compose that returns a list
// of lowercase and underscored car's names, e.g.: ['ferrari']
// // This one took two tries, redo once more and take it outta the rotation.

var _underscore = R.replace(/\W+/g, '_')

var sanitizeNames = R.compose(R.map(R.toLower), R.map(R.prop('name')))

console.log(sanitizeNames(CARS))

// Bonus 1:
// ========
// Refactor availablePrices with compose.
// // Surprisingly, I got this one on the first try.
var availablePrices_old = function(cars) {
  var available_cars = R.filter(R.prop('in_stock'), cars)
  return available_cars.map(function(x) {
    return accounting.formatMoney(x.dollar_value)
  }).join(', ')
}

var availablePrices = R.compose(
  R.join(', '),
  accounting.formatMoney,
  R.map(R.prop('dollar_value')),
  R.filter(R.prop('in_stock')))

console.log(availablePrices(CARS))
console.log(availablePrices_old(CARS))

// Bonus 2:
// ========
// Refactor to pointfree.
// Hint: You can use R.flip.
// This one took me a while. The hint actually didn't help
// at first, but it's good to know R.flip is there if I need it.

// // From the Ramda Docs:
// // Returns a new function much like the supplied one,
// // except that the first two arguments' order is reversed.

var fastestCar_old = function(cars) {
  var sorted = R.sortBy(function(car) {
    return car.horsepower
  }, cars)
  var fastest = R.last(sorted)
  return fastest.name + ' is the fastest'
}

var append = R.flip(R.concat)

var fastestCar = R.compose(
  append(' is the fastest'),
  R.prop('name'),
  R.last,
  R.sortBy(R.prop('horsepower'))
)

console.log(fastestCar(CARS))
console.log(fastestCar_old(CARS))










