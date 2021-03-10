// Write a fn() for For max sub array sun given the subarray length
// ([1,2,5,2,8,1,5],2) => 8 [2,8]
// ([4,2,1,6,2],4) => 13

let sumZero = (array, window, callback) => {

    let maxSum = 0;
    let tempSum = 0;
    if (array.length < window) return null;
    for (let i = 0; i < window; i++) tempSum += array[i];
    maxSum = tempSum

    for (i = 0; i <= (array.length - window) ;  i++) {
        tempSum = tempSum - array[i] + array[i + window]
        if(tempSum > maxSum) maxSum = tempSum ; 
    }
    return callback(maxSum)

}

sumZero([4,2,1,6,2],2, (result) => {
    console.log(result)
})