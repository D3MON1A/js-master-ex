// Write your function here
function keep(array, keeper) {
 var ar = array.filter((item) => item === keeper);
 return ar;
}