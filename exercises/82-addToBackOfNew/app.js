// Write your function here
function addToBackOfNew(arr, element) {
  // your code here
var newArray = [];
  console.log(arr);
  console.log(element);
  
  newArray = [...arr, element]
   console.log(arr);
  console.log(newArray);
  return newArray;
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]