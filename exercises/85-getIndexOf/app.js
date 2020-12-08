// Write your function here
function getIndexOf(char, str) {
  
  let arr = str.split(" ");
  for(let i=0; i<arr.length; i++)
    {
      console.log(arr[i]);
      if(arr[i]===char)
        {
          return i;
        }
    }
         return -1;  
}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2