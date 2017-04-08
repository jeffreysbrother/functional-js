// ES6 allows us to use var, const, let

for (var i = 0; i <= 10; i++) {
  console.log(i)
}
console.log('after loop', i);

// the above code illustrates that the variable "i" is not scoped to the context of the for loop; this appears to be caused by variable hoisting
// there was only one kind of variable scope in ES5: function scoped
// one solution is to wrap the for loop in an IIFE
// another solution is to use the 'let' keyword, which will enforce block scoping

// block scoping applies to loops, if statements, ...
// there is no real reason to use "var" any longer

// with 'const', the value cannot be re-assigned

const x = 123;
x = 11;       // this will throw an error
