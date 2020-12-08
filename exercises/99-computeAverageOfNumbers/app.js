// Write your function here
function computeAverageOfNumbers(nums) {
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(nums, nums.length);
  if(nums.length===0)
    {
      console.log("Empty array");
      return 0;
    }
  
 let sum = nums.reduce(reducer);
  sum = sum/nums.length;
  return sum;
}