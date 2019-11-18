function flatten(arr) {
    let result = [];
    if (arr && arr.length > 0) {
        arr.forEach(function(value) {
            if(Array.isArray(value)) {
                result = result.concat(flatten(value));
            } else {
                result.push(value);
            }
        });
    }    
    return result;
};

const testArr = [[1,2,[3]],4];

console.log("Array flattened:", flatten(testArr))