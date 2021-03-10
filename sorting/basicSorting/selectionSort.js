// let selectionSort = (arr) =>{
//     for(i=0;i<arr.length;i++){
//         var smallest = arr[i] ;
//         var index = i ; 
//         for(j=i+1;j<arr.length;j++){
//             let nextNumber = arr[j] ; 
//             if(smallest > nextNumber) {
//                 smallest = nextNumber ; 
//                 index = j
//             }
//         }
//         if(arr[i] != smallest) [arr[i],arr[index]] = [smallest , arr[i]]
//     }
//     return arr ; 
// }

// console.log(selectionSort([1,6,4,5,3,4,2,5,7,90,7,6]))


let selectionSort = (arr) =>{
    for(i=0 ; i<arr.length ; i++){ 
        let index = i
        let smallest = arr[i] ; 
        for(j=i+1;j<arr.length;j++) {
            if(arr[j] < smallest ) {
                smallest = arr[j]
                index = j ;
            }
        }
        if(index != i) [arr[i],arr[index]] = [arr[index],arr[i]] ; 
    }
    return arr
}

console.log(selectionSort([1,6,4,5,3,4,2,5,7,90,7,6]))