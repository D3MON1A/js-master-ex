// Write your function here
function isOddLength(word) {
  // your code here
      if(word.length%2===1)
    {
      return true;
    }
  else
    {
      return false;
    }
}
let output = isOddLength('special');
console.log(output); // --> true