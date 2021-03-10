// Write a fn() for sum zero for a sorted array
// [-3,-2,-1,0,1,2,3] => [-3,3]
// [-3,1,2,4] => undeifed

let sumZero = (array, callback) => {

    if (array.length == 0) return callback(false);

    let start = 0;
    let end = (array.length - 1);

    while (start != end) {

        let sum = array[start] + array[end];
        if (sum > 0) end-- ;
        if (sum < 0) start++ ;
        if(sum == 0) return callback([array[start],array[end]]) 
    }

    callback(undefined)

}

sumZero([1,2,3,4,5], (result) => {
    console.log(result)
})
