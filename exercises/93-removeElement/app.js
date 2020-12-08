// Write your function here
function removeElement(array, discarder) {

  console.log(discarder);
  console.log(array);

  if(!discarder)
    {
      console.log(discarder+ " is undefined");
    }
  else if(discarder.length===0)
    {
      return [];
    }
  else
    {
      for(let j=0; j<array.length; j++)
        {
          if(array[j]===discarder)
            {
              console.log("Arrlen is "+array.length);
              console.log("Removing "+array[j] + " from position "+j);
              array.splice(j,1);
              console.log("Modified array is "+array);
              j--;
            }
          else
            {
              console.log("In else");
              console.log(array[j]);
              console.log(discarder);
            }
        }
    }

        return array;
}