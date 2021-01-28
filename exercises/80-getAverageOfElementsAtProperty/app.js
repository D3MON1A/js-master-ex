// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    if ((obj[key] != undefined) && Array.isArray(obj[key]) && obj[key].length > 0) {
        var result = 0;
        for (var prop in obj[key]) {
            result += obj[key][prop];
        }
        return result / obj[key].length;
    } else {
        return 0;
    }
}

let obj = {
    key: [1, 2, 3]
};

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
