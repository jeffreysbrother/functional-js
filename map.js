var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
];

// FOR LOOP EXAMPLE 2
// var names = [];
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }

// MAP EXAMPLE
// var names = animals.map(function(animal) {
//   return animal.name;
// });

// MAP EXAMPLE WITH ES6 syntax
var names = animals.map((x) =>  x.name);

console.log(names);
