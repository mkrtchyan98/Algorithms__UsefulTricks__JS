//Compose performs right-to-left function composition
//Pipe performs left-to-right function composition

//recieves data and run g function then f function, Pipe to the same but order is reversed.
const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))

//examples
const multipyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multipyBy3AndMakePositive = compose(multypyBy3, makePositive);

//call function with data
multipyBy3AndMakePositive(-20);
