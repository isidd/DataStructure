// Write a fn() for checking square value for the other array  
// [1,2,3] [1,4,9] => true
// [1,2,3,1] [1,4,9,1] => true
// [1,2,3] [1,4,8] => false 

// let sameFrequencyCheck = (array1,array2,callback) =>{

//     if(array1.length != array2.length) return callback(false) ;

//     let object1 = new Array()
//     let object2 = new Array()

//     for(let i of array1) object1[i] = object1[i] + 1 || 1 ; 
//     for(let i of array2) object2[i] = object2[i] + 1 || 1 ; 

//     for(let i in object1) {
//         if(!(i**2 in object2)) return callback(false) ;
//         if(!(object1[i] == object2[i**2])) return callback(false) ;
//     }

//     callback(true) ;
// }

// sameFrequencyCheck([1,2,3],[1,4,9],(result)=>{
//     console.log(result)
// })


sameFreqCheck = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (i of arr1) obj1[i] = obj1[i] + 1 || 1;
    for (i of arr2) obj2[i] = obj2[i] + 1 || 1;

    for (i in obj1){
        if(!(i**2 in obj2)) return false ; 
        if(obj1[i**2] != obj2[i]) return false ; 
    }

    return true ; 

}

console.log(sameFreqCheck([1,2,3],[1,4,9]))