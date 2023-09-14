//problem1
let arr = [5, 2, 8, 9, 2, 65, 2, 2]
if (arr.length != 0) {
    let minimum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    console.log('Minimum: ' + minimum);
} else {
    console.log('Array is empty');
}


//problem2
let array1 = [1, 2, 3, 4, 5, 6];
let newArray = []
for (let i = array1.length - 1; i >= 0; i--) {
    newArray.push(array1[i])

}
console.log("Reverse of Array",newArray);
//problem3
let array2 = [1, 2, 3, 4, 5]
let newArray1 = []
let a = 0;
for (let i = 0; i < array2.length; i++) {
    a += newArray1.push(array2[i]);
}
console.log("Average of array:=>", a / 2);
// problem 4
let array4 = [1, 2, 3, 4, 5, 6, 7, 8];
if (array4.length != 0) {
    let empty = [];
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] % 2 == 1) {
            empty.push(array4[i])
        }
    }
    console.log("no even number is there=>",empty);
}
//problem5
let array5 = [1, 2, 3, 4, 5, 6];
let array6 = [5, 4, 2, 6, 9, 8];
if (array5.length != 0 || array6.length != 0) {
    let common = [];
    for (let i = 0; i < array5.length; i++) {

        for (let j = 0; j < array6.length; j++) {

            if (array5[i] === array6[j]) {
                common.push(array5[i]);
            }
        }
    }
    console.log("this are common number:=>", common);
}

