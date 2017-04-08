// 'this' keyword behaves differently with arrow functions?
// shorter syntax
// we can create more functions that are small, inline and single-purpose
// this makes functional programming easier in JS
// run this file like this: 'babel arrowfunctions.js | node'

const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]

const totalDamageOnDorkman = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce((prev, value) => (prev || 0) + value)

console.log('totalDamageOnDorkman', totalDamageOnDorkman);
