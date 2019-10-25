/*
Given an array of integers, return a new array
such that each element at index i of the new array
is the product of all the numbers in the original array except the one at i.
*/
//THIS SOLUTION WORKS WITH ARRAYS THAT CONTAIN ZEROES!!!!!!
let multiplication = (arr) => {
  let acum = 1;
  let result = [];
  let numOfZeroes = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numOfZeroes = numOfZeroes + 1;
    } else {
      acum = acum * arr[i];
    }
  }

  arr.forEach(el => {
    if (numOfZeroes === 0) {
      if (el !== 0) {
        result.push(acum / el);
      } else {
        result.push(acum);
      }
    } else {
        if(numOfZeroes === 1) {
          if(el === 0) {
            result.push(acum);
          } else {
            result.push(0);
          }
        } else {
          result.push(0);
        }
    }
  });

  return result;
}

var test = multiplication([3, 2, 1]);
console.log(test);