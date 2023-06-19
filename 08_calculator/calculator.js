const add = function(n,n1) {
	return n + n1;
};

const subtract = function(n,n2) {
	return n - n2;
};

const sum = function(arr) {
  let sum=0;
	for(i=0;i<arr.length;i++){
    sum += arr[i]
  }
  return sum
};

const multiply = function(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(no,po) {
	return no ** po;
};

const factorial = function(no) {
	if(no == 0 || no==1){
    return 1;
  }else{
    return no * factorial(no-1)
  }
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
