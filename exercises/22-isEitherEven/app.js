// Write your function here
function isEitherEven(num1, num2){
    if(num1 % 2 && num2 % 2){
        return true;
    }
    else{
        return false;
    }
}
var output = isEitherEven(1, 4);
console.log(output); // --> true