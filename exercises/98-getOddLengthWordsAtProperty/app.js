// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
 
   console.log(obj);
   console.log(key);
  
  if(!obj.hasOwnProperty(key))
  {
    return [];  
  } 
  else if(Object.prototype.toString.call(obj[key])!=="[object Array]")
         {
    return [];
         }
  
  else if(obj[key].length===0)
   {
    return [];  
  }
  else
    {
     // var arrlen = Object.keys(obj[key]).length;
      //console.log("Obj keys are "+obj[key], arrlen);
      var retarr =[];
    for( let j=0; j<obj[key].length; j++)
      {
        
        if(obj[key][j].length%2!==0)
          {
            retarr.push(obj[key][j]);
          }
      }
      console.log("Returning array");
      console.log(retarr);
      return retarr;
    }
 
}
