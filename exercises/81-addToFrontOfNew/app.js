// Write your function here
function addToFrontOfNew(arr, element) {
let newArray = [];
  console.log(arr);
  console.log(element);
  
 // newArray = [element, ...arr];//alternative metho
  newArray = [element].concat(arr);
   console.log(arr);
  console.log(newArray);
  return newArray;
}
let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input);  // --> [1, 2]
