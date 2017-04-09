// https://www.youtube.com/watch?v=HvMemAgOw6I&t=1088s

// Alonzo Church: Lambda Calculus
// computation expressed in terms of small functions
// functional programming
  // pure functions
  // declarative style programming
  // predictability
  // safety: immutable state
  // modularity: composability, closures

// more ES6 features
  // default parameter values
  // spread/rest syntax
    // when used as a parameter, it represents a variable number of arguments
    // destructuring: pulling values from a complex data structure, putting into variables
  // Object.assign(): merge multiple objects together
  // classes

// a pure function: depends only on its arguments, no side effects
  // referential transparency


// IMPERATIVE EXAMPLE
function doubleNumbers(numbers) {
  const doubled = [];
  const l = numbers.length;

  for (var i = 0; i < l; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

doubleNumbers([1, 2, 3, 4]);


// DECLARATIVE EXAMPLE
function doubleNumbersTwo(numbers) {
  return numbers.map(n => n * 2); 
}
doubleNumbersTwo([1, 2, 3, 4]);
