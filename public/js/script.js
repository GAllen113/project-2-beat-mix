// Drum Arrays: length of 16 and filled with false.
var kicks = new Array(16).fill(false);
var snares = new Array(16).fill(false);
var hiHats = new Array(16).fill(false);
var rideCymbals = new Array(16).fill(false);

//Flip the boolean value in the correct array at the specified index.
function toggleDrum (arr, arrValue){
 return !arr[arrValue];
}

//Sets all values in the correct array to false.
function clear (arr){
 return  arr.fill(false);
}

//Flips the boolean value of all elements in the correct array.
function invert (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = ! arr[i];
  }
  return arr[i];
}

