// Write your function here
function countAllCharacters(str) {
  

    var charcount = new Object();

  
  var arr = str.split("");
  console.log(arr);
  
   if(str==="")//not null
    {
        console.log(arr);
      return {};
    }
  for(var i=0; i<arr.length;i++)
    {
      console.log("charcount.hasOwnProperty(a[i]) "+charcount.hasOwnProperty(arr[i]));
      if(!charcount.hasOwnProperty(arr[i]))
        {
          console.log("In if  "+arr[i]);
          charcount[arr[i]] = 1;
          console.log(arr[i]);
          console.log(charcount[arr[i]]);
        }
      else{
        console.log("In else  "+arr[i]);
        charcount[arr[i]]++;
      }
    }
  
  console.log(charcount);
  return charcount;
}