// Write your function here
function select(arr, obj) {
  
let objnew = new Object();
  console.log(obj);
  console.log(arr);
  for(let j=0; j<arr.length; j++)
  {
    console.log("arr[j] "+arr[j]);
    console.log(obj.hasOwnProperty(arr[j]));
  if(obj.hasOwnProperty(arr[j]))
    {
       
      objnew[arr[j]] = obj[arr[j]]; 
    }
  }
  console.log(objnew);
  return objnew;
}