// Write a fn() for counting the unique values from array
// [1,1,1,1,1,2,3,4,5] => 5
// [] => 0

let sumZero = (array, callback) => {

    if (array.length == 0) return callback(0);

    let pointer = 0;
    let checker = 1;
    let count = 1;
    while (checker < array.length) {
        if (array[pointer] == array[checker]) {
            checker++
        } else {
            pointer = checker
            checker++
            count++
        }
    }

    return callback(count);

}

sumZero([1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6], (result) => {
    console.log(result)
})
