
 const printArray = arr => {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}

const reverseArray = arr => {
    // TODO Homework 1 reverse array arr. NB! reverse is not a print
    for (let i = 0, j = arr.length-1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
const search = (arr, value) => {
    // TODO Homework 2 search value in array arr. NB! return index or -1 if not found
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1
}

const bubbleSort = (arr, comparator) => {
    // TODO Homework 3 (Advanced) bubble sort arr with comparator
    // comparator - function(a, b) and return positive number if a > b, negative if a < b, 0 if a = b
    
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes); // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes);
printArray(primes); // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 11);
console.log(index); // 3
index = search(primes, 10);
console.log(index); // -1
const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr, (a, b) => b - a);
printArray(arr); // 9, 9, 5, 4, 2, 2, 2, 1, 1, 0

