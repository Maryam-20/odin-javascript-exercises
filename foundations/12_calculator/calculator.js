const add = function(a, b) {
  console.log(`Addition: ${a + b}`)
	return `Addition: ${a + b}`
};
add(4,9);

const subtract = function(a, b) {
  console.log(`Subtraction: ${b - a}`)
	return `Subtraction: ${b - a}`
};
subtract(8, 32);

const sum = function(array) {
  let result = 0 
  for (let i = 0; i < array.length; i++) {
    // let calc = arr[i] * arr[i +2];
    result += array[i]
  };
  console.log(`Summation of Array: ${result}`)
}
sum([4, 9, 7, 6, 5, 4, 9]);

const multiply = function(arr) {
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    // let calc = arr[i] * arr[i +2];
    result *= arr[i]
  };
  console.log(`Multiplication of Array: ${result}`)
};
multiply([4, 6, 8, 9, 9]);

const power = function(a, b) {
  console.log(`Power: ${a ** b}`)
	return `Power: ${a ** b}`
};
power(4, 9)

const factorial = function(a) {
  let answer = a
    for (let num = 1; num <= a-1; num++ ) {
      let calc = a - num;
      answer *= calc;
    };
  console.log(`Factorial: ${answer}`);
};
factorial(10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
