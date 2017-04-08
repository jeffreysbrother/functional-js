// recursion: when a function calls itself until it doesn't
// every time you have a loop, you can use recursion instead.
// there are things that recursion can do, that loops cannot

let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num)
  countDownFrom(num - 1)
}

countDownFrom(10)
