// let bubbleSort = (arr)=>{
//     console.log(arr.length)
//     for(i=(arr.length-1);i>=0;i--){
//         for(j=0;j<i;j++){
//             if(arr[j] > arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]] ;
//     }
// }
//     return arr
// }

// console.log(bubbleSort([13,8,4,6,5]))


let bubbleSort = (arr) =>{
    for(i=arr.length-1;i>=0;i--){
        for(j=0;j<i;j++){
            if(arr[j] > arr[j+1]) [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]  ;
        }
    }
    return arr ; 

}


console.log(bubbleSort([5,4,2,6,2,45,1,7,9,8]))