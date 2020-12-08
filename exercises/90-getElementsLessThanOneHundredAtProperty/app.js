// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
  
 let hundreds = [];
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
              if(obj[key][j]<100)
                {
                  hundreds.push(obj[key][j]);
                }
            }
        
        }
    }
      return hundreds;

}