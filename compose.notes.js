// Note: most of the code in this
// particular file doesn't work, and
// is included merely as study notes -AJ

var R = require('ramda')
var compose = require('./compose')

// 2 important properties of composition for Category Theory:

// ASSOCIATIVITY
var associative = compose(f, compose(g, h) == compose(compose(f, g), h)) // true

// allows us to write a variadic ‘compose’
// and remove 1 of the composes altogether,
// chaining them along indefinitely

var oldSnakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_')
}

//pointfree
var snakeCase = compose(R.replace(/\s+/ig, '_'), toLowerCase)

// Debugging:
// A common mistake is to compose something like map
// (which takes 2 args) w/o partially applying it first
// CORRECT:
var latin = compose(map(angry), reverse)

// IDENTITY
var id = (x) => x

compose(id, f) == compose(f, id) == f // true








