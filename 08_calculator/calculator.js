const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  val = 1;
  for(let i = a; i > 0; i--){
    val = val * (i);
   
  }
  return val;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
