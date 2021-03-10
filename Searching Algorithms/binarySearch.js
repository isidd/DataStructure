// let binarySearch = (arr,val)=>{
//     let left = 0 ;
//     let right = arr.length-1 ; 
//     while(left < arr.length && right >-1){
//         let mid = Math.floor((left+right)/2) ; 
//         if(arr[mid] == val) return mid ; 
//         if(arr[mid] < val) left = mid+1 ; 
//         if(arr[mid] > val) right = mid-1 ; 
//     }
//     return -1
// }

// console.log(binarySearch(['a','b','c','d','e'],'z'))



// let binarySearch = (arr,val) =>{
//     let left = 0 ; 
//     let right = arr.length - 1 ; 
//     while(left < right) {
//         console.log(left,right)
//         let mid = Math.floor((left + right)/2) ; 
//         if(arr[mid] == val) return arr[mid] ; 
//         if(arr[mid] > val ) right = mid - 1 ; 
//         if(arr[mid] <  val) left = mid + 1 ;
//     }
//     return -1 ; 
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],7))