let myArray = [1, 2, 3, 4, 5, 6512, 6, 2, 5, 3, 4];
// let myArray = [1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let isEqual = true;
let prev = myArray[0];
for (let el of myArray.slice(1)) {
    if (el !== prev) {
        isEqual = false;
        break;
    }
    prev = el;
}
if (isEqual) {
    console.log("All elements in array are equal");
}
else {
    console.log("Elements in array are not equal");
}
