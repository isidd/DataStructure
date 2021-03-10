// Write a fn() for Formin sub array length for the target value
// ([2,3,1,2,4,3],7) => 2 -> [4,3]

let minSubArrayLength = (array, target, callback) => {

    let minLength = Infinity;
    let pointer = 0;
    let checker = 1;
    let sum = (array[pointer] + array[checker])
    while (checker < array.length) {
        if (sum < target) {
            checker = checker + 1
            sum = sum + array[checker]
        }
        if (sum > target) {
            sum = sum - array[pointer]
            pointer = pointer + 1;

        }
        if (sum == target) {
            minLength = Math.min(minLength, (checker - pointer + 1))
            checker++
            sum = sum + array[checker]
        }

    }
    return callback(minLength)
}

minSubArrayLength([2, 3, 1, 2, 4,3], 7, (result) => {
    console.log(result)
})
