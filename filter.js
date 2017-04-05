// higher-order functions are functions that are treated values (as first-class citizens). These can be assigned to variables, passed to other functions as parameters.

// We are exploring some list transformation functions in JS

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
];

// FOR LOOP EXAMPLE
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}

// FILTER EXAMPLE
// var dogs = animals.filter(function(animal) {
//   return animal.species === 'dog';
// });

// FILTER EXAMPLE, USING COMPOSITION
// var isDog = function(animal) {
//   return animal.species === 'dog';
// }
// var dogs = animals.filter(isDog);

console.log(dogs);
