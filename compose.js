var compose = function (f, g) {
  return function(x) {
    return f(g(x))
  }
}

// written with arrow functions (not tested)
module.exports = (f, g) => (x) => f(g(x))
