// a new feature of JavaScript that lets you break apart, (destructure) objects and arrays into variables

var animal = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
}

// destructuring the animal object into two local variables
var { species, sound } = animal

console.log('The ' + species + ' says ' + sound + "!");
