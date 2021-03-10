// Write a fn() for checking the average pair on the targeted value
// fn([1,2,3],2.5) => true
// fn([1,3,3,5,6,7,10,12,19],8) => true
// fn([-1,0,3,4,5,6],4.1) => false

let avaragePair = (array, target, callback) => {

    let start = 0 ; 
    let end = array.length-1 ; 

        while(start != end){
            let avg = (array[start] + array[end])/2
            if(avg > target) end-- ; 
            if(avg < target) start++ ;
            if(avg == target) return callback(true)
        }
        return callback(false)

}

avaragePair([1,3,3,5,6,7,10,12,19],8, (result) => {
    console.log(result)
})
