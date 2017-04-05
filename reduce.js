// reduce() can be used to express ANY list transformation

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

// for loop example
// var totalAmount = 0;
// for (var i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }

var totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);


console.log(totalAmount);
