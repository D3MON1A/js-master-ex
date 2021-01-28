// Write your function here
function getFirstElementOfProperty(obj, key) {
  
   let objProperties = Object.keys(obj);
  console.log(obj);
  
  console.log(objProperties);
  for(let i=0; i<objProperties.length; i++)
    {
         console.log(obj[objProperties[i]]);     
      if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Array]")
         {
     console.log(obj[objProperties[i]]+" is an array");  
      return obj[objProperties[i]][0];
      
         }
    }
  console.log(obj);
  
}