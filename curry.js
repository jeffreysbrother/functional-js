import _ from 'lodash'

// a curryable function is a function that takes every argument by itself
// and returns a new function that expects the next dependency

// non-curried version
// let dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + ' dragon that breathes ' +
//   element + '!'
//
// console.log(dragon('betsy', 'large', 'urine'))


// curried version
// let dragon =
//   name =>
//     size =>
//       element =>
//         name + ' is a ' +
//         size + ' dragon that breathes ' +
//         element + '!'
//
// console.log(dragon('betsy')('large')('urine'))


let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
]

let hasElement =
  _.curry((element, obj) => obj.element === element)

let lightningDragons =
  dragons.filter(hasElement('lightning'))

console.log(lightningDragons)
