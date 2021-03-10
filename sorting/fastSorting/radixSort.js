let getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i) % 10);

let digitCount = (num) => {
    if(num === 0) return 1 ;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

let mostDigit = (nums) =>{
    let mostDigits = 0 ;
    for(i=0;i<nums.length;i++){
        mostDigits = Math.max(mostDigits,digitCount(nums[i]))
    }
    return mostDigits
}

let radixSort = (nums) => {

    let mostDigitz = mostDigit(nums)

    for(i=0;i<mostDigitz;i++){
        let digitBucket = Array.from({length:10},()=>[]) ; 
        for(k=0;k<nums.length;k++){
            digitBucket[getDigit(nums[k],i)].push(nums[k])
        }
        nums = [].concat(...digitBucket)
    }
    return nums
}

console.log(radixSort([12,1,123,45,45645,23,4,45,45,4545]))