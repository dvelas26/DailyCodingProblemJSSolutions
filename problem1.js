/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.*/

let pairEqualsK = (arr,k) => {
  let set = new Set(arr);
  for (var i = 0; i< arr.length; i++) {
    var tmp = k - arr[i];
    if(set.has(tmp)){
      return true;
    }
  }
  return false;
}

let arr = [10, 15, 3, 7];
let k = 17;

let test = pairEqualsK(arr, k);
console.log(test);