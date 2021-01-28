// Write your function here
function addToBackOfNew(arr, element) {
  // your code here
let newArray = [];
  console.log(arr);
  console.log(element);
  
  newArray = [...arr, element]
   console.log(arr);
  console.log(newArray);
  return newArray;
}
let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]