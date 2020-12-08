// Write your function here
function getLastElementOfProperty(obj, key) {
  
   var objProperties = Object.keys(obj);
  console.log(obj);
  
  console.log(objProperties);


  for(let i=0; i<objProperties.length; i++)
    {
         console.log(obj[objProperties[i]]);     
      if(!obj.hasOwnProperty(key))
        {
          return undefined;
        }
      if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Array]")
         {
     console.log(obj[objProperties[i]]+" is an array");  
           if(obj[objProperties[i]].length===0)
             {
               return undefined;
             }
       else
             {
          return obj[key].pop();
               
             }
         }
      else
        {
          return undefined;
        }
    }
  console.log(obj);
  return obj;
}

 