// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
 
  let tens = [];
  console.log(obj);
 if(!obj.hasOwnProperty(key)) 
   {
     return [];
   }
  else
    {
      if(obj[key].constructor.name !== "Array")
        {
      return [];
        }
      else if(obj[key].length===0)
        {
          return [];
        }
      else
        {
          for(let j=0; j<obj[key].length; j++)
            {
              console.log(obj[key][j]);
              if(obj[key][j]===10)
                {
                  tens.push(obj[key][j]);
                }
            }
        
        }
    }
      return tens;
}